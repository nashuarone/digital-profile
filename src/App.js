import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter, Redirect, Route } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
import { Layout } from "antd";

import "antd/dist/antd.css";
import "./App.css";

//import style from "./scss/App.module.scss";
import Gate from "./components/Auth/Gate";
import Registration from "./components/Auth/Registration";
import SignUp from "./components/Auth/SignUp";
import Hat from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Profile from "./components/Profile/Profile";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/Common/Preloader";

const { Content } = Layout;

function App() {
  const isAuth = useSelector(s => s.auth.isAuth)
  const initialized = useSelector((s) => s.app.initialized);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);
  return (
    <div>
      {!initialized ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <div>
            {!isAuth ? (
              <div>
                <Route exact path="/" render={() => <Gate />} />
                <Route
                  exact
                  path="/registration"
                  render={() => <Registration />}
                />
                <Route exact path="/signup" render={() => <SignUp />} />
                <Redirect to="/" />
              </div>
            ) : (
              <div>
                <Layout className="layout">
                  <Hat />
                  <Content>
                    <div className="site-layout-content">
                      <Route path="/profile" render={() => <Profile />} />
                      <Redirect to="/profile" />
                    </div>
                  </Content>
                  <Footer />
                </Layout>
              </div>
            )}
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
