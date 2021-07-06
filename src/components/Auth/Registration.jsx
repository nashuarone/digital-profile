import React from "react";
import { NavLink } from "react-router-dom";
import style from "../../scss/Auth.module.scss";
import { Button, Input, Checkbox } from "antd";

const Registration = () => {
  return (
    <div className={style.main}>
      <div className={style.authPopup}>
        <div className={style.popupContent}>
          <Button type="text" className={style.closeButton}>
            <NavLink to="/">{"<-"}</NavLink>
          </Button>
          <div className={style.popupContent__signUp}>
            <h3>Регистрация</h3>
            <div className={style.inputField}>
              <Input placeholder="Фамилия" />
              <Input placeholder="Имя" />
              <Input placeholder="Отчество (если есть)" />
              <Input placeholder="Email" />
              <Input placeholder="Пароль"/>
              <Input placeholder="Подтверждение пароля" />
              <Input placeholder="Телефон" />
              <Input placeholder="Компания" />
              <Input placeholder="Должность" />
              <Input placeholder="Дата рождения" />
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
