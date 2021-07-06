import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
import { Layout } from "antd";

import "./App.css";
import "antd/dist/antd.css";
//import style from "./scss/App.module.scss";
import Gate from "./components/Auth/Gate";
import Registration from "./components/Auth/Registration";
import SignUp from "./components/Auth/SignUp";
import Hat from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Profile from "./components/Profile/Profile";

const { Content } = Layout;

function App() {
  const isAuth = true
  return (
    <BrowserRouter>
      <div>
        {!isAuth ? (
          <div>
            <Route exact path="/" render={() => <Gate />} />
            <Route exact path="/registration" render={() => <Registration />} />
            <Route exact path="/signup" render={() => <SignUp />} />
          </div>
        ) : (
          <div>
            <Layout className="layout">
              <Hat />
              <Content>
                <div className="site-layout-content">
                  <Route path="/profile" render={() => <Profile />} />
                </div>
              </Content>
              <Footer />
            </Layout>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
