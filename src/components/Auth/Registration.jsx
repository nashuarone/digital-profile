import React from "react";
import { NavLink } from "react-router-dom";
import style from "../../scss/Auth.module.scss";
import "./localDecor.css"
import { Button, Input, Checkbox } from "antd";
import { LoginOutlined } from "@ant-design/icons";

const Registration = () => {
  return (
    <div className={style.main}>
      <div className={style.authPopup}>
        <div className={style.popupContent}>
          <Button type="text" className={style.closeButton}>
            <NavLink to="/">
              <LoginOutlined />
            </NavLink>
          </Button>
          <div className={style.popupContent__signUp}>
            <h3>Регистрация</h3>
            <div className={style.inputField}>
              <Input className={style.regInput} placeholder="Фамилия" />
              <Input className={style.regInput} placeholder="Имя" />
              <Input
                className={style.regInput}
                placeholder="Отчество (если есть)"
              />
              <Input className={style.regInput} placeholder="Email" />
              <Input className={style.regInput} placeholder="Пароль" />
              <Input
                className={style.regInput}
                placeholder="Подтверждение пароля"
              />
              <Input className={style.regInput} placeholder="Телефон" />
              <Input className={style.regInput} placeholder="Компания" />
              <Input className={style.regInput} placeholder="Должность" />
              <Input className={style.regInput} placeholder="Дата рождения" />
            </div>
            <Checkbox className={style.checkboxSign}>
              Ознакомлен с Политикой в области обработки{" "}
              <NavLink to="mama">персональных данных</NavLink> и даю{" "}
              <NavLink to="mama">согласие на их обработку</NavLink>
            </Checkbox>
            <div className={style.signButton}>
              <Button type="primary" className={style.signButtonSelf}>
                Зарегистрироваться
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
