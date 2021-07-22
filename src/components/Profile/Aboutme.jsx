import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import style from "../../scss/Profile.module.scss";
import { Button, Steps, Popover } from "antd";
import { MailOutlined, PhoneOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { getProfilePhoto } from "../../redux/storageReducer";

const { Step } = Steps;
const baseImgURL = `https://tandemteam.site`;
let defaultPhotoLink = `/api/storage-file/487d89df-2f87-4049-8c9e-c847b66954c1`;

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
  const dispatch = useDispatch();
  const userData = useSelector((s) => s.auth.userData);
  const profilePhotoFileLink = useSelector((s) => s.storage.profilePhotoFileLink);
  const [isVisibleAnswer, setVisibleAnswer] = useState(false);
  const toggleVisibleAnswer = () => {
    setVisibleAnswer(!isVisibleAnswer);
  };
  // if (profilePhotoFileLink) {
  //   defaultPhotoLink = profilePhotoFileLink
  // }
  useEffect(() => {
    if (userData.photo) {
      dispatch(getProfilePhoto(userData.photo))
    }
  }, [dispatch, userData.photo, profilePhotoFileLink]);
  return (
    <div>
      <div className={style.profile__personalinfo}>
        <h3>Личная информация</h3>
        <div className={style.personalBlock}>
          <div className={style.personalBlock__left}>
            <div className={style.userInfo}>
              <span className={style.userInfo__innerBig}>
                {userData.secondName}
              </span>
              <span className={style.userInfo__innerBig}>
                {userData.firstName}
              </span>
              <span className={style.userInfo__innerBig}>
                {userData.thirdName}
              </span>
            </div>
            <div className={style.userInfo}>
              <span className={style.userInfo__innerIcon}>
                <PhoneOutlined />
              </span>
              <span className={style.userInfo__inner}>{userData.tel}</span>
            </div>
            <div className={style.userInfo}>
              <span className={style.userInfo__innerIcon}>
                <MailOutlined />
              </span>
              <span className={style.userInfo__inner}>{userData.email}</span>
            </div>
            <div className={style.userInfo}>
              <span className={style.userInfo__innerStock}>Дата рождения:</span>
              <span className={style.userInfo__inner}>
                {userData.birthDate.slice(0, 10).split("-").reverse().join(".")}
              </span>
            </div>
          </div>
          <div className={style.personalBlock__right}>
            <img
              className={style.avatar}
              src={`${baseImgURL}${profilePhotoFileLink ? profilePhotoFileLink : defaultPhotoLink}`}
              alt="avatar"
            />
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
