import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "../../scss/Auth.module.scss";
import { Form, Select, Button, Input, Checkbox, DatePicker, message } from "antd";
import { createUser } from "../../redux/authReducer"
import { LoginOutlined } from "@ant-design/icons";

const { Option } = Select;
const dateFormat = "YYYY-MM-DD";

const SignUp = () => {
  const dispatch = useDispatch();
  const isFetchingButton = useSelector((s) => s.auth.isFetchingButton);
  const success_message = useSelector((s) => s.auth.success_message);
  const error_message = useSelector((s) => s.auth.error_message);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    dispatch(
      createUser(
        values.firstName,
        values.secondName,
        values.thirdName,
        values.email,
        values.prefix + values.tel,
        values.password,
        values.birthDate
      )
    );
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="+7">+7</Option>
      </Select>
    </Form.Item>
  );
  const regError = (error_message) => {
    message.error(error_message);
  };
  const regSuccess = (success_message) => {
    message.success(success_message);
  };
  useEffect(() => {
    if (error_message) {
      regError(error_message);
    }
  }, [error_message]);
  useEffect(() => {
    if (success_message) {
      regSuccess(success_message);
    }
  }, [success_message]);
  return (
    <div className={style.main}>
      <div className={style.authPopup}>
        <div className={style.popupContent}>
          <Button type="text" className={style.closeButton}>
            <NavLink to="/">
              <LoginOutlined className={style.closeButtonIcon} />
            </NavLink>
          </Button>
          <div className={style.popupContent__signUp}>
            <h3>??????????????????????</h3>
            <Form
              className={style.inputField}
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                prefix: "+7",
              }}
              scrollToFirstError
            >
              <div className="antInputGroup">
                <Form.Item
                  name="secondName"
                  rules={[
                    {
                      required: true,
                      message: "?????????????? ???????? ??????????????",
                      whitespace: false,
                    },
                  ]}
                >
                  <Input className={style.regInput} placeholder="??????????????" />
                </Form.Item>
                <Form.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "?????????????? ???????? ??????",
                      whitespace: false,
                    },
                  ]}
                >
                  <Input className={style.regInput} placeholder="??????" />
                </Form.Item>
                <Form.Item
                  name="thirdName"
                >
                  <Input
                    className={style.regInput}
                    placeholder="???????????????? (???????? ????????)"
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "???????????????????? E-mail",
                    },
                    {
                      required: true,
                      message: "?????????????? ?????? Email",
                    },
                  ]}
                >
                  <Input className={style.regInput} placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "?????????????? ????????????",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    className={style.regInput}
                    placeholder="????????????"
                  />
                </Form.Item>
                <Form.Item
                  name="confirm"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "?????????????????????? ????????????",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(new Error("???????????? ???? ??????????????????"));
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    className={style.regInput}
                    placeholder="?????????????????????????? ????????????"
                  />
                </Form.Item>
                <Form.Item
                  name="tel"
                  rules={[
                    {
                      required: true,
                      message: "?????????????? ???????? ?????????? ????????????????",
                    },
                  ]}
                >
                  <Input
                    className={style.regInput}
                    placeholder="??????????????"
                    addonBefore={prefixSelector}
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="birthDate"
                  rules={[
                    {
                      required: true,
                      message: "?????????????? ???????? ????????????????",
                    },
                  ]}
                >
                  <DatePicker
                    className={style.lastInput}
                    placeholder="???????? ????????????????"
                    format={dateFormat}
                  />
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error(
                                "???????????????? ???????????????? ???????????????????????? ????????????????"
                              )
                            ),
                    },
                  ]}
                >
                  <Checkbox>??????????????????????, ?????? ?????? ???????? 18 ??????</Checkbox>
                </Form.Item>
                <Form.Item
                  name="agreement2"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error(
                                "???????????????? ???????????????? ???????????????????????? ????????????????"
                              )
                            ),
                    },
                  ]}
                >
                  <Checkbox style={{ marginLeft: 0 }}>
                    ???????????????????? ?? ?????????????????? ?? ?????????????? ??????????????????{" "}
                    <NavLink to="mama">???????????????????????? ????????????</NavLink> ?? ??????{" "}
                    <NavLink to="mama">???????????????? ???? ???? ??????????????????</NavLink>
                  </Checkbox>
                </Form.Item>
              </div>
              <div className={style.signFormButton}>
                <Form.Item>
                  <div className={style.signButton}>
                    <Button
                      disabled={isFetchingButton}
                      type="primary"
                      htmlType="submit"
                      className={style.signButtonSelf2}
                    >
                      ????????????????????????????????????
                    </Button>
                  </div>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
