import React from "react";
import { NavLink } from "react-router-dom";
import style from "../../scss/Auth.module.scss";
import { Button, Input, Checkbox } from "antd";

const SignUp = () => {
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
              <Input placeholder="Пароль" />
              <Input placeholder="Подтверждение пароля" />
              <Input placeholder="Телефон" />
              <Input placeholder="Дата рождения" />
            </div>
            <Checkbox>
              Подтверждаю, что мне есть 18 лет
            </Checkbox>
            <Checkbox style={{ marginLeft: 0 }}>
              Ознакомлен с Политикой в области обработки{" "}
              <NavLink to="mama">персональных данных</NavLink> и даю{" "}
              <NavLink to="mama">согласие на их обработку</NavLink>
            </Checkbox>
            <div className={style.signButton}>
              <Button type="primary" className={style.signButtonSelf2}>
                Зарегистрироваться
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
