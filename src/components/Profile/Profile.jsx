import React from "react";
import { NavLink, Route } from "react-router-dom";
import style from "../../scss/Profile.module.scss";
import { Menu } from "antd";
import Aboutme from "./Aboutme";
import AboutmeEdit from "./Editors/AboutmeEdit";
import Resume from "./Resume";
import DigitalProfile from "./DigitalProfile";
import ResumeEditAntd from "./Editors/ResumeEditAntd";

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
        <Menu.Item key="2">
          <NavLink to="/profile/digital-profile">Цифровой профиль</NavLink>
        </Menu.Item>
        <Menu.Item key="3">Уведомления</Menu.Item>
      </Menu>
      {<Route exact path="/profile/aboutme-editor" component={AboutmeEdit} />}
      {<Route path="/profile/resume-editor" component={ResumeEditAntd} />}
      {<Route path="/profile/resume" component={Resume} />}
      {<Route path="/profile/digital-profile" component={DigitalProfile} />}
      {<Route exact path="/profile" component={Aboutme} />}
    </div>
  );
};

export default Profile;
