import React from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import style from "../../scss/Profile.module.scss";
import axios from "axios";
//import { saveAvatar } from "../../redux/storageReducer";


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  console.log("in handleChange: ", reader);
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

export class Avatar extends React.Component {
  state = {
    fileName: "",
    fileExtension: "",
    fileEncoded: "",
    loading: false,
    progress: 0,
  };

  handleChange = async (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      console.log(
        await getBase64(info.file.originFileObj, (imageUrl) =>
          this.setState({
            imageUrl,
            loading: false,
            fileName: info.file.name.split(".").shift(),
            fileExtension: info.file.name.split(".").pop(),
            fileEncoded: imageUrl.atob(),
          })
        )
      )
      // xz bld
    }
  };
  uploadImage = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;
    const myData = {
      fileName: file.name.split(".").shift(),
      fileExtension: file.name.split(".").pop(),
      fileEncoded: file.thumbUrl
    }

    const fmData = new FormData();
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "content-type": "application/ld+json",
      },
      onUploadProgress: (event) => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        this.setState({ progress: percent });
        if (percent === 100) {
          setTimeout(() => this.setState({ progress: 0 }), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    fmData.append("image", file.originFileObj);
    try {
      const res = await axios.post(
        "https://tandemteam.site/api/storage",
        ...myData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
    } catch (err) {
      console.log("Eroor: ", err);
      //const error = new Error("Some error");
      onError({ err });
    }
  };

  render() {
    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        customRequest={this.uploadImage}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? (
          <img
            className={style.avatar}
            src={imageUrl}
            alt="avatar"
            style={{ width: "100%" }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    );
  }
}
