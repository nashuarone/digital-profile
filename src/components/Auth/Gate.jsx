import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "../../scss/Auth.module.scss";
import { Button, Input, message } from "antd";
import Icon, { CloseOutlined } from "@ant-design/icons";
import { TandemBkgSvg, TandemTitleSvg, AuthLogoSvg } from "../../assets/forSvgExport";
import { getUserData } from "../../redux/authReducer";

const TandemBkgIcon = (props) => <Icon component={TandemBkgSvg} {...props} />;
const TandemTitleIcon = (props) => <Icon component={TandemTitleSvg} {...props} />;
const AuthLogoIcon = (props) => <Icon component={AuthLogoSvg} {...props} />;

const Gate = () => {
  const dispatch = useDispatch();
  const isFetchingButton = useSelector((s) => s.auth.isFetchingButton);
  const error_message = useSelector((s) => s.auth.error_message);
  const success_message = useSelector((s) => s.auth.success_message);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisibleEmployer, setVisiblePopupE] = useState(false);
  const [isVisibleApplicant, setVisiblePopupA] = useState(false);
  const handlleChangeE = (e) => {
    setEmail(e.target.value);
  };
  const handlleChangeP = (e) => {
    setPassword(e.target.value);
  };
  const toggleVisiblePopupE = () => {
    setVisiblePopupE(!isVisibleEmployer);
  };
  const toggleVisiblePopupA = () => {
    setVisiblePopupA(!isVisibleApplicant);
  };
  const authError = (error_message) => {
    message.error(error_message);
  };
  const authSuccess = (success_message) => {
    message.success(success_message);
  };
  useEffect(() => {
    if (error_message) {
      authError(error_message);
    }
  }, [error_message]);
  useEffect(() => {
    if (success_message) {
      authSuccess(success_message);
    }
  }, [success_message]);
  return (
    <div className={style.main}>
      <TandemBkgIcon className={style.iconstyle} />
      <div className={style.faceblock}>
        <TandemTitleIcon className={style.titleicon} />
        <div className={style.textblock}>
          <h1 className={style.titletext}>
            СЕРВИС ДЛЯ ПРОФЕССИОНАЛЬНОГО РАЗВИТИЯ ЧЕЛОВЕКА
          </h1>
        </div>
        <div className={style.buttons}>
          <Button
            disabled
            title="В разработке..."
            onClick={toggleVisiblePopupE}
            className={style.buttonStyleLeft}
          >
            Работодатель
          </Button>
          <Button
            onClick={toggleVisiblePopupA}
            className={style.buttonStyleRight}
          >
            Соискатель
          </Button>
        </div>
      </div>
      {isVisibleEmployer && (
        <div className={style.authPopup}>
          <div className={style.popupContent}>
            <Button
              onClick={toggleVisiblePopupE}
              type="text"
              className={style.closeButton}
            >
              <CloseOutlined className={style.closeButtonIcon} />
            </Button>
            <div className={style.popupContent__signIn}>
              <h3>Вход</h3>
              <Input placeholder="e-mail" />
              <Input placeholder="Пароль" />
              <Button type="primary" block>
                Войти
              </Button>
              <div className={style.additionalButtons}>
                <div>
                  <Button>
                    <NavLink to="/registration">Регистрация</NavLink>
                  </Button>
                </div>
                <div>
                  <Button>Забыли пароль?</Button>
                </div>
              </div>
            </div>
            <div className={style.popupContent__logo}>
              <AuthLogoIcon />
            </div>
          </div>
        </div>
      )}
      {isVisibleApplicant && (
        <div className={style.authPopup}>
          <div className={style.popupContent}>
            <Button
              onClick={toggleVisiblePopupA}
              type="text"
              className={style.closeButton}
            >
              <CloseOutlined className={style.closeButtonIcon} />
            </Button>
            <div className={style.popupContent__signIn}>
              <h3>Вход</h3>
              <Input
                value={email}
                onChange={handlleChangeE}
                placeholder="e-mail"
              />
              <Input
                value={password}
                onChange={handlleChangeP}
                placeholder="Пароль"
                type="password"
              />
              <Button
                disabled={isFetchingButton}
                onClick={() => dispatch(getUserData(email, password))}
                type="primary"
                block
                className={style.buttonApplicant}
              >
                Войти
              </Button>
              <div className={style.additionalButtons}>
                <div>
                  <Button className={style.borderApplicant}>
                    <NavLink to="/signup">Регистрация</NavLink>
                  </Button>
                </div>
                <div>
                  <Button className={style.borderApplicant}>
                    Забыли пароль?
                  </Button>
                </div>
              </div>
            </div>
            <div className={style.popupContent__logo}>
              <AuthLogoIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gate;
