import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "../../scss/Auth.module.scss";
import { Form, Select, Button, Input, Checkbox, DatePicker } from "antd";
import { createUser } from "../../redux/authReducer"

const { Option } = Select;
const dateFormat = "YYYY-MM-DD";

const SignUp = () => {
  const dispatch = useDispatch();
  const isFetchingButton = useSelector((s) => s.auth.isFetchingButton);
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
  return (
    <div className={style.main}>
      <div className={style.authPopup}>
        <div className={style.popupContent}>
          <Button type="text" className={style.closeButton}>
            <NavLink to="/">{"<-"}</NavLink>
          </Button>
          <div className={style.popupContent__signUp}>
            <h3>Регистрация</h3>
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
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Введите свою фамилию",
                      whitespace: false,
                    },
                  ]}
                >
                  <Input className={style.regInput} placeholder="Фамилия" />
                </Form.Item>
                <Form.Item
                  name="secondName"
                  rules={[
                    {
                      required: true,
                      message: "Введите свое имя",
                      whitespace: false,
                    },
                  ]}
                >
                  <Input className={style.regInput} placeholder="Имя" />
                </Form.Item>
                <Form.Item
                  name="thirdName"
                  rules={[
                    {
                      required: true,
                      message: "Введите свое отчество",
                      whitespace: false,
                    },
                  ]}
                >
                  <Input
                    className={style.regInput}
                    placeholder="Отчество (если есть)"
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "Невалидный E-mail",
                    },
                    {
                      required: true,
                      message: "Введите Ваш Email",
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
                      message: "Введите пароль",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    className={style.regInput}
                    placeholder="Пароль"
                  />
                </Form.Item>
                <Form.Item
                  name="confirm"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Подтвердите пароль",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(new Error("Пароли не совпадают"));
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    className={style.regInput}
                    placeholder="Подтверждение пароля"
                  />
                </Form.Item>
                <Form.Item
                  name="tel"
                  rules={[
                    {
                      required: true,
                      message: "Введите свой номер телефона",
                    },
                  ]}
                >
                  <Input
                    className={style.regInput}
                    placeholder="Телефон"
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
                      message: "Введите дату рождения",
                    },
                  ]}
                >
                  <DatePicker
                    className={style.lastInput}
                    placeholder="Дата рождения"
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
                                "Согласие является обязательным условием"
                              )
                            ),
                    },
                  ]}
                >
                  <Checkbox>Подтверждаю, что мне есть 18 лет</Checkbox>
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
                                "Согласие является обязательным условием"
                              )
                            ),
                    },
                  ]}
                >
                  <Checkbox style={{ marginLeft: 0 }}>
                    Ознакомлен с Политикой в области обработки{" "}
                    <NavLink to="mama">персональных данных</NavLink> и даю{" "}
                    <NavLink to="mama">согласие на их обработку</NavLink>
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
                      Зарегистрироваться
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
