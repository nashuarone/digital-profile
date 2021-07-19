import React, { useState } from "react";
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import moment from "moment";
import style from "../../scss/Profile.module.scss";
import { Button, Input, Upload, Steps, Popover, DatePicker } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const { Step } = Steps;
const dateFormat = "YYYY-MM-DD";

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        Этап {index + 1} статус: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const Aboutme = () => {
  const userData = useSelector((s) => s.auth.userData);
  const [isVisibleAnswer, setVisibleAnswer] = useState(false);
  const toggleVisibleAnswer = () => {
    setVisibleAnswer(!isVisibleAnswer);
  };
  return (
    <div>
      <div className={style.profile__personalinfo}>
        <h3>Личная информация</h3>
        <div className={style.personalBlock}>
          <div className={style.personalBlock__left}>
            <div className={style.userInfo}>
              Фамилия
              <span className={style.userInfo__inner}>
                {userData.secondName}
              </span>
            </div>
            <div className={style.userInfo}>
              Имя
              <span className={style.userInfo__inner}>
                {userData.firstName}
              </span>
            </div>
            <div className={style.userInfo}>
              Отчество (если есть)
              <span className={style.userInfo__inner}>
                {userData.thirdName}
              </span>
            </div>
            <div className={style.userInfo}>
              Email
              <span className={style.userInfo__inner}>{userData.email}</span>
            </div>
            <div className={style.userInfo}>
              Телефон
              <span className={style.userInfo__inner}>{userData.tel}</span>
            </div>
            <div className={style.userInfo}>
              Дата рождения
              <span className={style.userInfo__inner}>
                {userData.birthDate}
              </span>
              <DatePicker
                defaultValue={moment(userData.birthDate, dateFormat)}
                bordered={false}
                disabled
              />
            </div>
            <Input className={style.userInfo} placeholder="Дата рождения" />
          </div>
          <div className={style.personalBlock__right}>
            <img className={style.avatar} src="" alt="avatar" />
          </div>
        </div>
        <NavLink to="/profile/aboutme-editor">
          <Button className={style.personalButton} type="primary">
            Редактировать
          </Button>
        </NavLink>
      </div>
      <div>
        <h2>Дорожная карта</h2>
        <div className={style.profile__personalinfo}>
          <div className={style.timeline}>
            <Steps current={1} progressDot={customDot}>
              <Step description="Регистрация, Резюме" />
              <Step description="Диагностика" />
              <Step description="Прохождение курсов" />
              <Step description="Проверка навыков на кейсах" />
              <Step description="Решение боевых задач, работа в командах" />
              <Step description="Доступ к банку резюме. Интеграция" />
            </Steps>
          </div>
          <div className={style.roadmapdescription}>
            <div>
              <p>Необходимо выполнить:</p>
              <ul>
                <li>перейти в раздел “Диагностика”</li>
                <li>выбрать направление</li>
                <li>пройти тесты</li>
              </ul>
            </div>
            <div className={style.roadmapopup}>
              <QuestionCircleOutlined onClick={toggleVisibleAnswer} />
            </div>
            {isVisibleAnswer && (
              <div className={style.answerPopup}>
                <div className={style.answerContent}>
                  <Button
                    onClick={toggleVisibleAnswer}
                    type="text"
                    className={style.closeButton}
                  >
                    X
                  </Button>
                  <div className={style.answerContent__text}>
                    <h3>Нужна помощь?</h3>
                    <p>bla bla</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={style.profile__video}>
        <div className={style.halfvideo}>
          <h2>Процесс прохождения программы</h2>
          <div className={style.videoplayer}>iFrame Player</div>
        </div>
        <div className={style.halfvideo}>
          <h2>Экскурс по образовательной платформе</h2>
          <div className={style.videoplayer}>iFrame Player</div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
