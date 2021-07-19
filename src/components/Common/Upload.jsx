import React from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import style from "../../scss/Profile.module.scss";
import { storageAPI } from "../../api/api";


function getBase64(img, callback) {
  const reader = new FileReader();
  console.log("in reader: ", reader.result);
  reader.addEventListener("load", () => callback(reader.result));
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
    loading: false,
    fileName: "",
    fileExtension: "",
    fileEncoded: ""
  };

  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      console.log("in handleChange: ", info.file);
      getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          imageUrl,
          loading: false,
          fileName: info.file.name.split(".").shift(),
          fileExtension: info.file.name.split(".").pop(),
        })
      );
      // xz bld
    }
  };
  request = async () => {
    await storageAPI.avatar(this.state.fileName, this.state.fileExtension, this.state.fileEncoded);
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
        action={this.request}
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
