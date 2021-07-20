import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "../../../scss/Profile.module.scss";
import { Button, Input, Steps, Popover, DatePicker, message } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import moment from "moment";
import { putUserData } from "../../../redux/authReducer";
import { Avatar } from "../../Common/Upload2";

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

const AboutmeEdit = () => {
  const dispatch = useDispatch();
  const userData = useSelector((s) => s.auth.userData);
  const userId = userData.id
  const isFetchingButton = useSelector((s) => s.auth.isFetchingButton);
  const success_message = useSelector((s) => s.auth.success_message);
  const [email, setEmail] = useState(userData.email);
  const [secondName, setSecondName] = useState(userData.secondName);
  const [firstName, setFirstName] = useState(userData.firstName);
  const [thirdName, setThirdName] = useState(userData.thirdName);
  const [birthDate, setBirthdate] = useState(userData.birthDate);
  const [tel, setTel] = useState(userData.tel);
  const [isVisibleAnswer, setVisibleAnswer] = useState(false);
  const toggleVisibleAnswer = () => {
    setVisibleAnswer(!isVisibleAnswer);
  };
  const handlleChangeF = (e) => {
    setFirstName(e.target.value);
  };
  const handlleChangeS = (e) => {
    setSecondName(e.target.value);
  };
  const handlleChangeE = (e) => {
    setEmail(e.target.value);
  };
  const handlleChangeT = (e) => {
    setThirdName(e.target.value);
  };
  const handlleChangePh = (e) => {
    setTel(e.target.value);
  };
  const changeSuccess = (success_message) => {
    message.success(success_message);
  };
  useEffect(() => {
    if (success_message) {
      changeSuccess(success_message);
    }
  }, [success_message]);
  return (
    <div>
      <div className={style.profile__personalinfo}>
        <h3>Личная информация</h3>
        <div className={style.personalBlock}>
          <div className={style.personalBlock__left}>
            <Input
              value={secondName}
              onChange={handlleChangeS}
              className={style.userInfoEdit}
              placeholder="Фамилия"
            />
            <Input
              value={firstName}
              onChange={handlleChangeF}
              className={style.userInfoEdit}
              placeholder="Имя"
            />
            <Input
              value={thirdName}
              onChange={handlleChangeT}
              className={style.userInfoEdit}
              placeholder="Отчество (если есть)"
            />
            <Input
              value={email}
              onChange={handlleChangeE}
              className={style.userInfoEdit}
              placeholder="Email"
            />
            <Input
              value={tel}
              onChange={handlleChangePh}
              className={style.userInfoEdit}
              placeholder="Телефон"
            />
            <DatePicker
              placeholder="Дата рождения"
              onChange={(val) => setBirthdate(val)}
              className={style.userInfoEdit}
              defaultValue={moment(birthDate, dateFormat)}
            />
          </div>
          <div className={style.personalBlock__right}>
            <Avatar />
            {/* <img className={style.avatar} src="" alt="avatar" />
            <Upload listType="picture">
              <Button icon={<i className="fas fa-camera"></i>}>
                Загрузить фотографию
              </Button>
            </Upload> */}
          </div>
        </div>
        <Button
          onClick={() =>
            dispatch(
              putUserData(
                userId,
                firstName,
                secondName,
                thirdName,
                email,
                tel,
                birthDate
              )
            )
          }
          disabled={isFetchingButton}
          className={style.personalButton}
          type="primary"
        >
          Сохранить
        </Button>
        <NavLink to="/profile">
          <Button className={style.personalButton} type="primary">
            Назад
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

export default AboutmeEdit;
