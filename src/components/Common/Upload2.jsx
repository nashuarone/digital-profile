import React, {useState} from "react";
import { Upload, Progress } from "antd";
import { saveAvatar } from "../../redux/storageReducer";
import { useDispatch } from "react-redux";
import ImgCrop from "antd-img-crop";
import "./localDecor.css"

export const Avatar = () => {
  const dispatch = useDispatch();
  const [defaultFileList, setDefaultFileList] = useState([]);
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
    //const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     "content-type": "multipart/form-data" },
    //   onUploadProgress: (event) => {
    //     const percent = Math.floor((event.loaded / event.total) * 100);
    //     setProgress(percent);
    //     if (percent === 100) {
    //       setTimeout(() => setProgress(0), 1000);
    //     }
    //     onProgress({ percent: (event.loaded / event.total) * 100 });
    //   },
    // };
    const fileEncoded = await toBase64(file)
    fmData.append("image", file);
    dispatch(
      saveAvatar(
        file.name.split(".").shift(),
        file.name.split(".").pop(),
        fileEncoded
      )
    );
    onSuccess("Ok");
    // try {
    //   const res = await axios.post(
    //     "https://tandemteam.site/api/storage",
    //     fmData,
    //     config
    //   );

    //   onSuccess("Ok");
    //   console.log("server res: ", res);
    // } catch (err) {
    //   console.log("Eroor: ", err);
    //   const error = new Error("Some error");
    //   onError({ err });
    // }
  };

  const handleOnChange = ({ file, fileList, event }) => {
    console.log("1:", file, "2:", fileList, "3:", event, "4:", file.thumbUrl);

    //Using Hooks to update the state to the current filelist
    setDefaultFileList(fileList);
    //filelist - [{uid: "-1",url:'Some url to image'}]
  };

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
