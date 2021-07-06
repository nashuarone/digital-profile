import React, { useState } from "react";
import style from "../../scss/Profile.module.scss";
import { Button, Input, Upload, Steps, Popover } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const { Step } = Steps;

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
            <Input placeholder="Фамилия" />
            <Input placeholder="Имя" />
            <Input placeholder="Отчество (если есть)" />
            <Input placeholder="Email" />
            <Input placeholder="Телефон" />
            <Input placeholder="Дата рождения" />
          </div>
          <div className={style.personalBlock__right}>
            <img className={style.avatar} src="" alt="avatar" />
            <Upload listType="picture">
              <Button icon={<i className="fas fa-camera"></i>}>
                Загрузить фотографию
              </Button>
            </Upload>
          </div>
        </div>
        <Button className={style.personalButton} type="primary">
          Сохранить
        </Button>
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
