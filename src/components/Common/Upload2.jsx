import React, {useEffect, useState} from "react";
import { Upload, Progress } from "antd";
import { saveAvatar } from "../../redux/storageReducer";
import { useDispatch } from "react-redux";
import ImgCrop from "antd-img-crop";
import "./localDecor.css"

export const Avatar = () => {
  const dispatch = useDispatch();
  const [defaultFileList, setDefaultFileList] = useState([]);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [successParams, setSuccessParams] = useState(false);
  const [progress] = useState(0);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const uploadImage = async (options) => {
    const { onSuccess, file } = options;

    const fmData = new FormData();
    const fileEncoded = await toBase64(file)
    fmData.append("image", file);
    setFirst(file.name.split(".").shift())
    setSecond(file.name.split(".").pop())
    setThird(fileEncoded.slice(23))
    setSuccessParams(true)
    onSuccess("Ok");
  };

  const handleOnChange = ({ file, fileList, event }) => {
    setDefaultFileList(fileList);
  };

  useEffect(() => {
    if (successParams) {
      dispatch(saveAvatar(first, second, third));
    }
  }, [dispatch, successParams, first, second, third]);

  return (
    <div className="container">
      <ImgCrop rotate>
        <Upload
          accept="image/*"
          customRequest={uploadImage}
          onChange={handleOnChange}
          listType="picture-card"
          defaultFileList={defaultFileList}
          className="image-upload-grid"
        >
          {defaultFileList.length >= 1 ? null : <div>Загрузить фото</div>}
        </Upload>
      </ImgCrop>
      {progress > 0 ? <Progress percent={progress} /> : null}
    </div>
  );
};
