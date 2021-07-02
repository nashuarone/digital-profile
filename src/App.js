import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
import { Layout, Menu } from "antd";

import "./App.css";
import "antd/dist/antd.css";
//import style from "./scss/App.module.scss";
import Gate from "./components/Auth/Gate";
import Registration from "./components/Auth/Registration";

const { Header, Content, Footer } = Layout;

function App() {
  const isAuth = false
  return (
    <BrowserRouter>
      <div>
        {!isAuth ? (
          <div>
            <Route exact path="/" render={() => <Gate />} />
            <Route exact path="/registration" render={() => <Registration />} />
          </div>
        ) : (
          <div>
            <Layout className="layout">
              <Header>
                <div className="logo" />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["2"]}
                >
                  {new Array(5).fill(null).map((_, index) => {
                    const key = index + 1;
                    return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                  })}
                </Menu>
              </Header>
              <Content>
                <div className="site-layout-content">Content</div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                TANDEM ©2021 Created with Ant Design
              </Footer>
            </Layout>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
