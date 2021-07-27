import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSpecialAntdSolution } from "../../../redux/storageReducer";

const SpecialInput = (props) => {
  const dispatch = useDispatch();
  const certificateData = props.certificateData;
  const almazIdCertificate = useSelector((s) => s.storage.almazIdCertificate);
  const [certificateLink2, setCertificateLink2] = useState(certificateData);
  useEffect(() => {
    if (!!almazIdCertificate) {
      setCertificateLink2(almazIdCertificate);
      dispatch(setSpecialAntdSolution(almazIdCertificate))
    }
  }, [dispatch, almazIdCertificate]);
  return <Input value={certificateLink2} />
};

export default SpecialInput;
