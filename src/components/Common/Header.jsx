import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "../../scss/App.module.scss";
import { Layout, Menu, Button, Badge } from "antd";
import Icon, { BellFilled } from "@ant-design/icons";
import { HeadLogoSvg } from "../../assets/forSvgExport";
import { generalLogout } from "../../redux/authReducer";

const { Header } = Layout;
const HeadLogoIcon = (props) => <Icon component={HeadLogoSvg} {...props} />;

const Hat = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Header className={style.header}>
        <HeadLogoIcon className={style.header__icon} />
        <Menu
          className={style.header__menu}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["0"]}
        >
          <Menu.Item key="0">
            <NavLink to="/profile">Профиль</NavLink>
          </Menu.Item>
          <Menu.Item key="1">
            <NavLink to="/diagnostics">Диагностика</NavLink>
          </Menu.Item>
          <Menu.Item key="2">Стажировка</Menu.Item>
          <Menu.Item key="3">Банк резюме</Menu.Item>
        </Menu>
        <div className={style.header__log}>
          <Badge count={0}>
            <NavLink to="/profile/notifications">
              <BellFilled className={style.logSize} />
            </NavLink>
          </Badge>
          <Button
            onClick={() => dispatch(generalLogout())}
            className={style.logSize}
            type="text"
          >
            Выйти
          </Button>
        </div>
      </Header>
    </div>
  );
};

export default Hat;
