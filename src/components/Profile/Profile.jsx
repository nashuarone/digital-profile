import React from "react";
import { NavLink, Route } from "react-router-dom";
import style from "../../scss/Profile.module.scss";
import { Menu } from "antd";
import Aboutme from "./Aboutme";
import Resume from "./Resume";

const Profile = () => {
  return (
    <div className={style.profile}>
      <h1>Мой профиль</h1>
      <Menu
        className={style.profile__menu}
        mode="horizontal"
        defaultSelectedKeys={["0"]}
      >
        <Menu.Item key="0">
          <NavLink to="/profile">О себе</NavLink>
        </Menu.Item>
        <Menu.Item key="1">
          <NavLink to="/profile/resume">Резюме</NavLink>
        </Menu.Item>
        <Menu.Item key="2">Цифровой профиль</Menu.Item>
        <Menu.Item key="3">Уведомления</Menu.Item>
      </Menu>
      {<Route exact path="/profile" component={Aboutme} />}
      {<Route path="/profile/resume" component={Resume} />}
    </div>
  );
};

export default Profile;
