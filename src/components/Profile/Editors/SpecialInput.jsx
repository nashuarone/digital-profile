import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { useSelector } from "react-redux";

const SpecialInput = (props) => {
  const certificateData = props.certificateData;
  const almazIdCertificate = useSelector((s) => s.storage.almazIdCertificate);
  const [certificateLink2, setCertificateLink2] = useState(certificateData);
  useEffect(() => {
    if (!!almazIdCertificate) {
      setCertificateLink2(almazIdCertificate);
    }
  }, [almazIdCertificate]);
  return (
    <div>
      <Input value={certificateLink2} />
    </div>
  );
};

export default SpecialInput;
