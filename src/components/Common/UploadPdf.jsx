import React, {useEffect, useState} from "react";
import { Button, message, Upload } from "antd";
import { saveCertificate } from "../../redux/storageReducer";
import { useDispatch } from "react-redux";
import "./localDecor.css"
import { UploadOutlined } from "@ant-design/icons";

export const Certificate = () => {
  const dispatch = useDispatch();
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [successParams, setSuccessParams] = useState(false);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const props = {
  name: 'file',
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  customRequest: async (options) => {
    const { onSuccess, file } = options;
    const fileEncoded = await toBase64(file)
    //console.log(fileEncoded);
    setFirst(file.name.split(".").shift())
    setSecond(file.name.split(".").pop())
    setThird(fileEncoded.slice(23))
    setSuccessParams(true)
    onSuccess("Ok");
  },
};

  useEffect(() => {
    if (successParams) {
      dispatch(saveCertificate(first, second, third));
    }
  }, [dispatch, successParams, first, second, third]);

  return (
    <div className="container">
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Прикрепить сертификат</Button>
      </Upload>
    </div>
  );
};
