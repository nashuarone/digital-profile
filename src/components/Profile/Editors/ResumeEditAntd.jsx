import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "../../../scss/Profile.module.scss";
import { Form, Select, Button, Checkbox, DatePicker, Input, Radio, Space, InputNumber, message } from "antd";
import { FolderAddOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import { createResume } from "../../../redux/resumeReducer";
import { Certificate } from "../../Common/UploadPdf";
import SpecialInput from "./SpecialInput";

const { Option } = Select;
const { TextArea } = Input;
const dateFormat = "YYYY-MM-DD";

const ResumeEditAntd = () => {
  const dispatch = useDispatch();
  const userData = useSelector((s) => s.auth.userData);
  const resumeData = useSelector((s) => s.resume.resumeData);
  const isFetchingButton = useSelector((s) => s.resume.isFetchingButton);
  const success_message = useSelector((s) => s.resume.success_message);
  const almazIdCertificate = useSelector((s) => s.storage.almazIdCertificate);
  const fileLinkCertificate = useSelector((s) => s.storage.fileLinkCertificate);

  const [form] = Form.useForm();
  const onFinish = (values) => {
    dispatch(
      createResume(
        resumeData.id,
        values.firstName,
        values.secondName,
        values.thirdName,
        values.prefix + values.tel,
        values.email,
        values.telegramIdentifier,
        values.discordIdentifier,
        values.fbLink,
        values.vkLink,
        values.placeOfResidence,
        values.birthDate,
        values.sex,
        values.militaryTicker,
        values.citizenship,
        values.desiredEmployment,
        values.desiredWorkSchedule,
        values.workExperiences,
        values.projectActivities,
        values.additionalInformation,
        values.availableLanguages,
        values.aboutMe,
        values.secondaryGeneralEducations,
        values.otherEducation,
        values.certificates,
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
  const [certificateLink, setCertificateLink] = useState(almazIdCertificate);
  const [enemyVisible, setEnemyVisible] = useState(false);
  // const [isVisibleWorkXP, setVisibleWorkXP] = useState(false);
  const [disabledValue, setDisabledValue] = useState(false);
  const [disabledValueSchool, setDisabledValueSchool] = useState(false);
  const [disabledValueInst, setDisabledValueInst] = useState(false);
  const [disabledValueAddition, setDisabledValueAddition] = useState(false);
  const getDisabledValue = () => {
    setDisabledValue(!disabledValue);
  };
  const getDisabledValueSchool = () => {
    setDisabledValueSchool(!disabledValueSchool);
  };
  const getDisabledValueInst = () => {
    setDisabledValueInst(!disabledValueInst);
  };
  const getDisabledValueAddition = () => {
    setDisabledValueAddition(!disabledValueAddition);
  };
  const showEnemyVisible = () => {
    setEnemyVisible(true);
  };
  const hideEnemyVisible = () => {
    setEnemyVisible(false);
  };
  // const toggleVisibleWorkXP = () => {
  //   setVisibleWorkXP(!isVisibleWorkXP);
  // };
  const changeSuccess = (success_message) => {
    message.success(success_message);
  };
  useEffect(() => {
    if (success_message) {
      changeSuccess(success_message);
    }
  }, [success_message]);
  useEffect(() => {
    if (!!almazIdCertificate) {
      setCertificateLink(almazIdCertificate);
    }
  }, [almazIdCertificate, fileLinkCertificate]);
  return (
    <div>
      <div className={style.profile__personalinfo}>
        <div className={style.introduce}>
          <div className={style.introduce__half}>
            <h2>Для чего необходимо ваше резюме?</h2>
            <p>
              Ваше резюме необходимо для того, чтобы мы смогли отследить
              динамику вашего роста, а вы наглядно заметить разницу навыков с
              момента вашего входа и на протяжении всего пути
            </p>
            <Button
              disabled
              title="В разработке..."
              className={style.personalButton}
              type="primary"
            >
              Скачать резюме
            </Button>
          </div>
          <div className={style.introduce__half}>
            <h2>Как правильно заполнять резюме?</h2>
            <div className={style.videoplayer}>iFrame Player</div>
          </div>
        </div>
        <div className={style.resume}>
          <h2>Ваше резюме</h2>

          <Form
            className={style.resume__main}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              prefix: "+7",
            }}
            scrollToFirstError
          >
            <div className="antInputGroup">
              <span className={style.resumeSpan}>Фамилия</span>
              <Form.Item
                className={style.inputImitator}
                initialValue={userData.secondName}
                name="secondName"
                rules={[
                  {
                    required: true,
                    message: "Введите свою фамилию",
                    whitespace: false,
                  },
                ]}
              >
                <Input placeholder="" />
              </Form.Item>
              <span className={style.resumeSpan}>Имя</span>
              <Form.Item
                className={style.inputImitator}
                initialValue={userData.firstName}
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Введите свое имя",
                    whitespace: false,
                  },
                ]}
              >
                <Input placeholder="" />
              </Form.Item>
              <span className={style.resumeSpan}>Отчество (если есть)</span>
              <Form.Item
                className={style.inputImitator}
                initialValue={userData.thirdName}
                name="thirdName"
              >
                <Input placeholder="" />
              </Form.Item>
              <span className={style.resumeSpan}>Телефон</span>
              <Form.Item
                initialValue={userData.tel.slice(2)}
                className={style.inputImitator}
                name="tel"
                rules={[
                  {
                    required: true,
                    message: "Введите свой номер телефона",
                  },
                ]}
              >
                <Input
                  placeholder=""
                  addonBefore={prefixSelector}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
              <span className={style.resumeSpan}>Email</span>
              <Form.Item
                className={style.inputImitator}
                initialValue={userData.email}
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "Невалидный E-mail",
                  },
                  {
                    required: true,
                    message: "Введите свой email",
                  },
                ]}
              >
                <Input placeholder="" />
              </Form.Item>
              <span className={style.resumeSpan}>Telegram (никнейм)</span>
              <Form.Item
                className={style.inputImitator}
                initialValue={resumeData?.telegramIdentifier}
                name="telegramIdentifier"
              >
                <Input placeholder="" />
              </Form.Item>
              <span className={style.resumeSpan}>Discord</span>
              <Form.Item
                className={style.inputImitator}
                initialValue={resumeData?.discordIdentifier}
                name="discordIdentifier"
              >
                <Input placeholder="" />
              </Form.Item>
              <span className={style.resumeSpan}>Ссылка на Facebook</span>
              <Form.Item
                className={style.inputImitator}
                initialValue={resumeData?.fbLink}
                name="fbLink"
              >
                <Input placeholder="" />
              </Form.Item>
              <span className={style.resumeSpan}>Ссылка на Вконтакте</span>
              <Form.Item
                className={style.inputImitator}
                initialValue={resumeData?.vkLink}
                name="vkLink"
              >
                <Input placeholder="" />
              </Form.Item>
              <span className={style.resumeSpan}>Место проживания</span>
              <Form.Item
                className={style.inputImitator}
                initialValue={resumeData?.placeOfResidence}
                name="placeOfResidence"
                rules={[
                  {
                    required: true,
                    message: "Заполните место проживания",
                  },
                ]}
              >
                <Input placeholder="" />
              </Form.Item>
              <span className={style.resumeSpan}>Дата рождения</span>
              <Form.Item
                className={style.inputImitator}
                initialValue={moment(userData.birthDate, dateFormat)}
                name="birthDate"
                rules={[
                  {
                    required: true,
                    message: "Введите дату рождения",
                  },
                ]}
              >
                <DatePicker placeholder="" />
              </Form.Item>
              <span className={style.resumeSpan}>Пол</span>
              <Form.Item
                className={style.inputImitator}
                initialValue={resumeData?.sex}
                name="sex"
                rules={[
                  {
                    required: true,
                    message: "Введите пол (гедерная принадлежность)",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio onClick={showEnemyVisible} value={0}>
                    Мужской
                  </Radio>
                  <Radio onClick={hideEnemyVisible} value={1}>
                    Женский
                  </Radio>
                </Radio.Group>
              </Form.Item>
              {enemyVisible && (
                <div className={style.resumeFlex}>
                  <span className={style.resumeSpan}>Военный билет</span>
                  <Form.Item
                    className={style.inputImitator}
                    initialValue={resumeData?.militaryTicker}
                    name="militaryTicker"
                  >
                    <Radio.Group>
                      <Radio value={true}>Есть</Radio>
                      <Radio value={false}>Нет</Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>
              )}
              <span className={style.resumeSpan}>Гражданство</span>
              <Form.Item
                className={style.inputImitator}
                initialValue={resumeData?.citizenship}
                name="citizenship"
                rules={[
                  {
                    required: true,
                    message: "Введите гражданство",
                  },
                ]}
              >
                <Input placeholder="" />
              </Form.Item>
              <div className={style.resumeFlex}>
                <h2>Профессиональная деятельность</h2>
              </div>
              <span className={style.resumeSpan}>Желаемая занятость</span>
              <Form.Item
                className={style.inputImitator}
                initialValue={resumeData?.desiredEmployment}
                name="desiredEmployment"
              >
                <Radio.Group>
                  <Radio value={0}>Полная</Radio>
                  <Radio value={1}>Частичная</Radio>
                  <Radio value={2}>Проектная работа</Radio>
                  <Radio value={3}>Стажировка</Radio>
                </Radio.Group>
              </Form.Item>
              <span className={style.resumeSpan}>Желаемый график работы</span>
              <Form.Item
                className={style.inputImitator}
                initialValue={resumeData?.desiredWorkSchedule}
                name="desiredWorkSchedule"
              >
                <Radio.Group>
                  <Radio value={0}>Полный день</Radio>
                  <Radio value={1}>Сменный график</Radio>
                  <Radio value={2}>Гибкий график</Radio>
                  <Radio value={3}>Удаленная работа</Radio>
                  <Radio value={4}>Вахтовый метод</Radio>
                </Radio.Group>
              </Form.Item>
              <div className={style.resumeFlex}>
                <h2>
                  <b>Опыт работы</b>
                </h2>
              </div>
              <Form.List name="workExperiences">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                      <Space
                        key={key}
                        className={style.workXPform}
                        align="baseline"
                        direction="vertical"
                      >
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>Место работы</span>
                          <Form.Item
                            className={style.inputImitator}
                            {...restField}
                            name={[name, "organization"]}
                            fieldKey={[fieldKey, "organization"]}
                          >
                            <Input placeholder="Полное название компании" />
                          </Form.Item>
                        </div>
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>Локация</span>
                          <Form.Item
                            className={style.inputImitator}
                            {...restField}
                            name={[name, "region"]}
                            fieldKey={[fieldKey, "region"]}
                          >
                            <Input placeholder="Местонахождение компании (регион или город)" />
                          </Form.Item>
                        </div>
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>
                            Начало работы
                          </span>
                          <Form.Item
                            {...restField}
                            name={[name, "startDate"]}
                            fieldKey={[fieldKey, "startDate"]}
                          >
                            <DatePicker placeholder="" />
                          </Form.Item>
                        </div>
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>
                            Окончание работы
                          </span>
                          <Form.Item
                            {...restField}
                            name={[name, "endDate"]}
                            fieldKey={[fieldKey, "endDate"]}
                          >
                            <DatePicker
                              disabled={disabledValue}
                              placeholder=""
                            />
                            <Checkbox
                              onClick={getDisabledValue}
                              className={style.littleElemMargin}
                            >
                              По настоящее время
                            </Checkbox>
                          </Form.Item>
                        </div>
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>Должность</span>
                          <Form.Item
                            className={style.inputImitator}
                            {...restField}
                            name={[name, "position"]}
                            fieldKey={[fieldKey, "position"]}
                          >
                            <Input placeholder="" />
                          </Form.Item>
                        </div>
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>
                            Выполняемые задачи
                          </span>
                          <Form.Item
                            className={style.inputImitator}
                            {...restField}
                            name={[name, "duty"]}
                            fieldKey={[fieldKey, "duty"]}
                          >
                            <TextArea placeholder="" />
                          </Form.Item>
                        </div>
                        <Button
                          className={style.inputImitatorCenter}
                          type="dashed"
                          onClick={() => remove(name)}
                          block
                          icon={<MinusOutlined />}
                        >
                          Удалить место работы
                        </Button>
                      </Space>
                    ))}
                    <div className={style.workXPform}>
                      <div className={style.inputImitatorCenter}>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          block
                          icon={<PlusOutlined />}
                        >
                          Добавить место работы
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </Form.List>
              <div className={style.resumeFlex}>
                <h2>Проектная деятельность</h2>
              </div>
              <Form.List name="projectActivities">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                      <Space
                        key={key}
                        className={style.workXPform}
                        align="baseline"
                        direction="vertical"
                      >
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>
                            Описание проекта
                          </span>
                          <Form.Item
                            className={style.inputImitator}
                            {...restField}
                            name={[name, "description"]}
                            fieldKey={[fieldKey, "description"]}
                          >
                            <TextArea placeholder="Название проекта, краткая аннотация о чём проект, кукаю роль выполняли в проекте, в какой период" />
                          </Form.Item>
                        </div>
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>
                            Ссылка на проект
                          </span>
                          <Form.Item
                            className={style.inputImitator}
                            {...restField}
                            name={[name, "link"]}
                            fieldKey={[fieldKey, "link"]}
                          >
                            <Input placeholder="" />
                          </Form.Item>
                        </div>
                        <Button
                          className={style.inputImitatorCenter}
                          type="dashed"
                          onClick={() => remove(name)}
                          block
                          icon={<MinusOutlined />}
                        >
                          Удалить проект
                        </Button>
                      </Space>
                    ))}
                    <div className={style.workXPform}>
                      <div className={style.inputImitatorCenter}>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          block
                          icon={<PlusOutlined />}
                        >
                          Добавить проект
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </Form.List>
              <span className={style.resumeSpan}>
                Дополнительная информация
              </span>
              <Form.Item
                className={style.inputImitator}
                initialValue={resumeData?.additionalInformation}
                name="additionalInformation"
                rules={[
                  {
                    min: 2,
                    message: "2 (два) символа минимум",
                  },
                ]}
              >
                <TextArea
                  showCount
                  maxLength={1024}
                  placeholder="Расскажи о себе то, что думаешь не упомянул выше, но работодателю это полезно знать"
                />
              </Form.Item>
              <div className={style.resumeFlex}>
                <h2>О себе</h2>
              </div>
              <Form.List name="availableLanguages">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                      <Space
                        key={key}
                        className={style.workXPform}
                        align="baseline"
                        direction="vertical"
                      >
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>Знание языка</span>
                          <Form.Item
                            className={style.inputImitator}
                            {...restField}
                            name={[name, "language"]}
                            fieldKey={[fieldKey, "language"]}
                          >
                            <Input placeholder="Английский" />
                          </Form.Item>
                        </div>
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>
                            Уровень владения
                          </span>
                          <Form.Item
                            className={style.inputImitator}
                            {...restField}
                            name={[name, "level"]}
                            fieldKey={[fieldKey, "level"]}
                            rules={[
                              {
                                max: 3,
                                message: "3 (три) символа максимум",
                              },
                              {
                                min: 2,
                                message: "2 (два) символа минимум",
                              },
                            ]}
                          >
                            <Input placeholder="B1" />
                          </Form.Item>
                        </div>
                        <Button
                          className={style.inputImitatorCenter}
                          type="dashed"
                          onClick={() => remove(name)}
                          block
                          icon={<MinusOutlined />}
                        >
                          Удалить язык
                        </Button>
                      </Space>
                    ))}
                    <div className={style.workXPform}>
                      <div className={style.inputImitatorCenter}>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          block
                          icon={<PlusOutlined />}
                        >
                          Добавить язык
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </Form.List>
              <span className={style.resumeSpan}>
                Дополнительная информация
              </span>
              <Form.Item
                className={style.inputImitator}
                initialValue={resumeData?.aboutMe}
                name="aboutMe"
              >
                <TextArea
                  showCount
                  maxLength={1024}
                  placeholder="Расскажите о своих навыках, знаниях, увлечениях, мероприятиях в каких участвовали, волонтёрство"
                />
              </Form.Item>
              <div className={style.resumeFlex}>
                <h2>Образование</h2>
              </div>
              <div className={style.resumeFlex}>
                <h3>
                  <b>Среднее общее образование</b>
                </h3>
              </div>
              <Form.List name="secondaryGeneralEducations">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                      <Space
                        key={key}
                        className={style.workXPform}
                        align="baseline"
                        direction="vertical"
                      >
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>
                            Название школы
                          </span>
                          <Form.Item
                            className={style.inputImitator}
                            {...restField}
                            name={[name, "schoolName"]}
                            fieldKey={[fieldKey, "schoolName"]}
                          >
                            <Input placeholder="" />
                          </Form.Item>
                        </div>
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>
                            Начало обучения
                          </span>
                          <Form.Item
                            {...restField}
                            name={[name, "startDate"]}
                            fieldKey={[fieldKey, "startDate"]}
                          >
                            <DatePicker picker="year" placeholder="" />
                          </Form.Item>
                        </div>
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>
                            Окончание обучения
                          </span>
                          <Form.Item
                            {...restField}
                            name={[name, "endDate"]}
                            fieldKey={[fieldKey, "endDate"]}
                          >
                            <DatePicker
                              picker="year"
                              disabled={disabledValueSchool}
                              placeholder=""
                            />
                            <Checkbox
                              onClick={getDisabledValueSchool}
                              className={style.littleElemMargin}
                            >
                              По настоящее время
                            </Checkbox>
                          </Form.Item>
                        </div>
                        <Button
                          className={style.inputImitatorCenter}
                          type="dashed"
                          onClick={() => remove(name)}
                          block
                          icon={<MinusOutlined />}
                        >
                          Удалить школу
                        </Button>
                      </Space>
                    ))}
                    <div className={style.workXPform}>
                      <div className={style.inputImitatorCenter}>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          block
                          icon={<PlusOutlined />}
                        >
                          Добавить школу
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </Form.List>
              <div className={style.resumeFlex}>
                <h3>
                  <b>
                    Среднее профессиональное образование / Высшее образование
                  </b>
                </h3>
              </div>
              <Form.List name="otherEducation">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                      <Space
                        key={key}
                        className={style.workXPform}
                        align="baseline"
                        direction="vertical"
                      >
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>
                            Уровень образования
                          </span>
                          <Form.Item
                            className={style.inputImitator}
                            {...restField}
                            name={[name, "level"]}
                            fieldKey={[fieldKey, "level"]}
                          >
                            <Radio.Group>
                              <Radio value={0}>
                                Среднее профессиональное образование
                              </Radio>
                              <Radio value={1}>
                                Высшее образование (бакалавриат)
                              </Radio>
                              <Radio value={2}>
                                Высшее образование (магистратура)
                              </Radio>
                              <Radio value={3}>
                                Высшее образование (аспирантура)
                              </Radio>
                              <Radio value={4}>
                                Высшее образование (специалитет)
                              </Radio>
                            </Radio.Group>
                          </Form.Item>
                        </div>
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>
                            Учебное заведение
                          </span>
                          <Form.Item
                            className={style.inputImitator}
                            {...restField}
                            name={[name, "institution"]}
                            fieldKey={[fieldKey, "institution"]}
                          >
                            <Input placeholder="Полное название учебного заведения" />
                          </Form.Item>
                        </div>
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>
                            Специализация
                          </span>
                          <Form.Item
                            className={style.inputImitator}
                            {...restField}
                            name={[name, "specialization"]}
                            fieldKey={[fieldKey, "specialization"]}
                          >
                            <Input placeholder="" />
                          </Form.Item>
                        </div>
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>
                            Начало обучения
                          </span>
                          <Form.Item
                            {...restField}
                            name={[name, "startDate"]}
                            fieldKey={[fieldKey, "startDate"]}
                          >
                            <DatePicker picker="year" placeholder="" />
                          </Form.Item>
                        </div>
                        <div className={style.workXPform__child}>
                          <span className={style.workXPspan}>
                            Окончание обучения
                          </span>
                          <Form.Item
                            {...restField}
                            name={[name, "endDate"]}
                            fieldKey={[fieldKey, "endDate"]}
                          >
                            <DatePicker
                              picker="year"
                              disabled={disabledValueInst}
                              placeholder=""
                            />
                            <Checkbox
                              onClick={getDisabledValueInst}
                              className={style.littleElemMargin}
                            >
                              По настоящее время
                            </Checkbox>
                          </Form.Item>
                        </div>
                        <Button
                          className={style.inputImitatorCenter}
                          type="dashed"
                          onClick={() => remove(name)}
                          block
                          icon={<MinusOutlined />}
                        >
                          Удалить учебное заведение
                        </Button>
                      </Space>
                    ))}
                    <div className={style.workXPform}>
                      <div className={style.inputImitatorCenter}>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          block
                          icon={<PlusOutlined />}
                        >
                          Добавить учебное заведение
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </Form.List>
              <div className={style.resumeFlex}>
                <h3>
                  <b>Дополнительное образование, курсы</b>
                </h3>
              </div>
              <p>
                Если есть дополнительные курсы или вы прошли переквалификацию и
                у вас есть сертификат, удостоверение о повышении квалификации,
                диплом о профессиональной переподготовке и т.д., то прикрепляй
                скан и получи дополнительные баллы к профилю!
              </p>
              <Form.List name="certificates">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(
                      ({ key, name, fieldKey, ...restField }, index) => (
                        <Space
                          key={key}
                          className={style.workXPform}
                          align="baseline"
                          direction="vertical"
                        >
                          <div className={style.workXPform__child}>
                            <span className={style.workXPspan}>
                              Начало обучения
                            </span>
                            <Form.Item
                              {...restField}
                              name={[name, "startDate"]}
                              fieldKey={[fieldKey, "startDate"]}
                            >
                              <DatePicker placeholder="" />
                            </Form.Item>
                          </div>
                          <div className={style.workXPform__child}>
                            <span className={style.workXPspan}>
                              Окончание обучения
                            </span>
                            <Form.Item
                              {...restField}
                              name={[name, "endDate"]}
                              fieldKey={[fieldKey, "endDate"]}
                            >
                              <DatePicker
                                disabled={disabledValueAddition}
                                placeholder=""
                              />
                              <Checkbox
                                onClick={getDisabledValueAddition}
                                className={style.littleElemMargin}
                              >
                                По настоящее время
                              </Checkbox>
                            </Form.Item>
                          </div>
                          <div className={style.workXPform__child}>
                            <span className={style.workXPspan}>
                              Название курса
                            </span>
                            <Form.Item
                              className={style.inputImitator}
                              {...restField}
                              name={[name, "name"]}
                              fieldKey={[fieldKey, "name"]}
                            >
                              <Input placeholder="" />
                            </Form.Item>
                          </div>
                          <div className={style.workXPform__child}>
                            <span className={style.workXPspan}>
                              Номер сертификата
                            </span>
                            <Form.Item
                              className={style.inputImitator}
                              {...restField}
                              name={[name, "number"]}
                              fieldKey={[fieldKey, "number"]}
                            >
                              <Input placeholder="" />
                            </Form.Item>
                          </div>
                          <div className={style.workXPform__child}>
                            <span className={style.workXPspan}>
                              Место прохождения
                            </span>
                            <Form.Item
                              className={style.inputImitator}
                              {...restField}
                              name={[name, "serviceName"]}
                              fieldKey={[fieldKey, "serviceName"]}
                            >
                              <Input placeholder="" />
                            </Form.Item>
                          </div>
                          <div className={style.workXPform__child}>
                            <span className={style.workXPspan}>
                              Количество часов
                            </span>
                            <Form.Item
                              className={style.inputImitator}
                              {...restField}
                              name={[name, "hours"]}
                              fieldKey={[fieldKey, "hours"]}
                            >
                              <InputNumber placeholder="" />
                            </Form.Item>
                          </div>
                          <div className={style.invisibleBlock}>
                            <span className={style.invisibleBlock__span}>
                              Невидимый блок для хранения ссылки сертификата
                              invisibleBlock
                            </span>
                            <Form.Item
                              className={style.inputImitator}
                              initialValue={certificateLink}
                              {...restField}
                              name={[name, "storage"]}
                              fieldKey={[fieldKey, "storage"]}
                            >
                              <SpecialInput certificateData={certificateLink} />
                            </Form.Item>
                          </div>
                          <div className={style.resumeFlex}>
                            <h3>Какие навыки приобрели</h3>
                          </div>
                          <Form.List name="acquiredSkills">
                            {(fields, { add, remove }) => (
                              <>
                                {fields.map(
                                  (
                                    { key, name, fieldKey, ...restField },
                                    index
                                  ) => (
                                    <Space
                                      key={key}
                                      className={style.workXPform}
                                      align="baseline"
                                      direction="vertical"
                                    >
                                      <div className={style.workXPform__child}>
                                        <span className={style.workXPspan}>
                                          Навык
                                        </span>
                                        <Form.Item
                                          className={style.inputImitator}
                                          {...restField}
                                          name={[name, "title"]}
                                          fieldKey={[fieldKey, "title"]}
                                        >
                                          <Input placeholder="" />
                                        </Form.Item>
                                      </div>
                                      <Button
                                        className={style.inputImitatorCenter}
                                        type="dashed"
                                        onClick={() => remove(name)}
                                        block
                                        icon={<MinusOutlined />}
                                      >
                                        Удалить навык
                                      </Button>
                                    </Space>
                                  )
                                )}
                                <div className={style.workXPform}>
                                  <div className={style.inputImitatorCenter}>
                                    <Button
                                      type="dashed"
                                      onClick={() => add()}
                                      block
                                      icon={<PlusOutlined />}
                                    >
                                      Добавить навык
                                    </Button>
                                  </div>
                                </div>
                              </>
                            )}
                          </Form.List>
                          <div className={style.resumeFlex}>
                            <Certificate />
                          </div>
                          <Button
                            className={style.inputImitatorCenter}
                            type="dashed"
                            onClick={() => remove(name)}
                            block
                            icon={<MinusOutlined />}
                          >
                            Удалить сертификат
                          </Button>
                        </Space>
                      )
                    )}
                    <div className={style.workXPform}>
                      <div className={style.inputImitatorCenter}>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          block
                          icon={<PlusOutlined />}
                        >
                          Добавить сертификат
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </Form.List>
            </div>
            <div className={style.signFormButton}>
              <Form.Item>
                <Button
                  disabled={isFetchingButton}
                  type="primary"
                  htmlType="submit"
                  className={style.personalButton}
                >
                  Сохранить
                </Button>
                <NavLink to="/profile/resume">
                  <Button className={style.personalButton} type="primary">
                    Назад
                  </Button>
                </NavLink>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
      <div className={style.profile__personalinfo}>
        <div className={style.resume__main}>
          <h2>Переход на этап “Стажировка”</h2>
          <div className={style.internshipBlock}>
            <p className={style.internshipText}>
              Для открытия следующего этапа “Стажировка” необходимо прикрепить
              сертификат, подтверждающий прохождение курса на этапе “Прохождение
              курса”
            </p>
            <Button>
              Добавить сертификат
              <FolderAddOutlined className={style.iconSize} />
            </Button>
          </div>
        </div>
        <Button className={style.personalButton} type="primary">
          Сохранить
        </Button>
      </div>
      <div className={style.profile__personalinfo}>
        <h2>Сертификаты</h2>
        <div className={style.certificateBlock}>
          <div className={style.certificateBlock__img}>
            <img src="" alt="certificate img" />
          </div>
          <div className={style.certificateBlock__desc}>
            <h3 className={style.certificateTitle}>Web основы</h3>
            <span>Сертификат: 00000000</span>
            <div>
              <span className={style.certificateSkill}>CSS</span>
              <span className={style.certificateSkill}>HTML</span>
            </div>
            <span>
              Статус:{" "}
              <span className={style.certificateChecked}>обработано</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditAntd;
