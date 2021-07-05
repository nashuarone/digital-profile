import React from "react";
import style from "../../scss/Profile.module.scss";
import { Button, Input, Menu, Upload, Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const Profile = () => {
  return (
    <div className={style.profile}>
      <h2>Мой профиль</h2>
      <Menu
        className={style.profile__menu}
        mode="horizontal"
        defaultSelectedKeys={["2"]}
      >
        <Menu.Item>О себе</Menu.Item>
        <Menu.Item>Резюме</Menu.Item>
        <Menu.Item>Цифровой профиль</Menu.Item>
        <Menu.Item>Уведомления</Menu.Item>
      </Menu>
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
          <div>
            <Timeline mode="alternate">
              <Timeline.Item color="green">
                Регистрация, Резюме 2021-09-01
              </Timeline.Item>
              <Timeline.Item
                dot={<ClockCircleOutlined className={style.timelineClock} />}
              >
                Диагностика 2021-09-01
              </Timeline.Item>
              <Timeline.Item color="gray">Прохождение курсов</Timeline.Item>
              <Timeline.Item color="gray">
                Проверка навыков на кейсах
              </Timeline.Item>
              <Timeline.Item color="gray">
                Решение боевых задач, работа в командах
              </Timeline.Item>
              <Timeline.Item color="gray">
                Доступ к банку резюме. Интеграция
              </Timeline.Item>
            </Timeline>
          </div>
          <div>
            <div>text</div>
            <div>popup with question</div>
          </div>
        </div>
      </div>
      <div className={style.profile__video}>
        <div>
          <h2>Дорожная</h2>
        </div>
        <div>
          <h2>карта</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
