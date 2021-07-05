import React from "react";
import { NavLink } from "react-router-dom";
import style from "../../scss/App.module.scss";
import { Layout, Menu } from "antd";
import Icon from "@ant-design/icons";
import { HeadLogoSvg } from "../../assets/forSvgExport";

const { Header } = Layout;
const HeadLogoIcon = (props) => <Icon component={HeadLogoSvg} {...props} />;

const Hat = () => {
  return (
    <div>
      <Header className={style.header}>
        <HeadLogoIcon className={style.header__icon} />
        <Menu
          className={style.header__menu}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
        >
          <Menu.Item><NavLink to="/profile">Профиль</NavLink></Menu.Item>
          <Menu.Item>Диагностика</Menu.Item>
          <Menu.Item>Стажировка</Menu.Item>
          <Menu.Item>Банк резюме</Menu.Item>
        </Menu>
        <div className={style.header__log}>Выйти</div>
      </Header>
    </div>
  );
};

export default Hat;
