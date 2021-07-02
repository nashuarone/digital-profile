import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import style from "../../scss/Auth.module.scss";
import { Button, Input } from "antd";
import Icon from "@ant-design/icons";
import { TandemBkgSvg, TandemTitleSvg, AuthLogoSvg } from "../../assets/forSvgExport";

const TandemBkgIcon = (props) => <Icon component={TandemBkgSvg} {...props} />;
const TandemTitleIcon = (props) => <Icon component={TandemTitleSvg} {...props} />;
const AuthLogoIcon = (props) => <Icon component={AuthLogoSvg} {...props} />;

const Gate = () => {
  const [isVisibleEmployer, setVisiblePopupE] = useState(false);
  const [isVisibleApplicant, setVisiblePopupA] = useState(false);
  const toggleVisiblePopupE = () => {
    setVisiblePopupE(!isVisibleEmployer);
  };
  const toggleVisiblePopupA = () => {
    setVisiblePopupA(!isVisibleApplicant);
  };
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
          <Button onClick={toggleVisiblePopupE} className={style.buttonStyleLeft}>Работодатель</Button>
          <Button onClick={toggleVisiblePopupA} className={style.buttonStyleRight}>Соискатель</Button>
        </div>
      </div>
      {isVisibleEmployer && (
        <div className={style.authPopup}>
          <div className={style.popupContent}>
            <Button onClick={toggleVisiblePopupE} type="text" className={style.closeButton}>X</Button>
            <div className={style.popupContent__signIn}>
              <h3>Вход</h3>
              <Input placeholder="e-mail" />
              <Input placeholder="Пароль" />
              <Button type="primary" block>
                Войти
              </Button>
              <div className={style.additionalButtons}>
                <div>
                  <Button><NavLink to="/registration">Регистрация</NavLink></Button>
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
            <Button onClick={toggleVisiblePopupA} type="text" className={style.closeButton}>X</Button>
            <div className={style.popupContent__signIn}>
              <h3>Вход</h3>
              <Input placeholder="e-mail" />
              <Input placeholder="Пароль" />
              <Button type="primary" block className={style.buttonApplicant}>
                Войти
              </Button>
              <div className={style.additionalButtons}>
                <div>
                  <Button className={style.borderApplicant}>Регистрация</Button>
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
