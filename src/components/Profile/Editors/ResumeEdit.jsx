import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "../../../scss/Profile.module.scss";
import { Button, Checkbox, DatePicker, Input, Radio } from "antd";
import { FolderAddOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";

const { TextArea } = Input;
const dateFormat = "YYYY-MM-DD";

const ResumeEdit = () => {
  //const dispatch = useDispatch();
  const userData = useSelector((s) => s.auth.userData);
  const resumeData = useSelector((s) => s.resume.resumeData);
  const isFetchingButton = useSelector((s) => s.resume.isFetchingButton);
  //const success_message = useSelector((s) => s.resume.success_message);
  const [email, setEmail] = useState(userData.email);
  const [secondName, setSecondName] = useState(userData.secondName);
  const [firstName, setFirstName] = useState(userData.firstName);
  const [thirdName, setThirdName] = useState(userData.thirdName);
  const [birthDate, setBirthdate] = useState(userData.birthDate);
  const [tel, setTel] = useState(userData.tel);
  const [telegramIdentifier, setTelegramIdentifier] = useState(
    resumeData.telegramIdentifier
  );
  const [discordIdentifier, setDiscordIdentifier] = useState(
    resumeData.discordIdentifier
  );
  const [fbLink, setFbLink] = useState(resumeData.fbLink);
  const [vkLink, setVkLink] = useState(resumeData.vkLink);
  const [placeOfResidence, setPlaceOfResidence] = useState(
    resumeData.placeOfResidence
  );
  const [isVisibleWorkXP, setVisibleWorkXP] = useState(false);
  const toggleVisibleWorkXP = () => {
    setVisibleWorkXP(!isVisibleWorkXP);
  };
  const handlleChangeF = (e) => {
    setFirstName(e.target.value);
  };
  const handlleChangeS = (e) => {
    setSecondName(e.target.value);
  };
  const handlleChangeE = (e) => {
    setEmail(e.target.value);
  };
  const handlleChangeT = (e) => {
    setThirdName(e.target.value);
  };
  const handlleChangePh = (e) => {
    setTel(e.target.value);
  };
  const handlleChangeTlgr = (e) => {
    setTelegramIdentifier(e.target.value);
  };
  const handlleChangeDsc = (e) => {
    setDiscordIdentifier(e.target.value);
  };
  const handlleChangeFB = (e) => {
    setFbLink(e.target.value);
  };
  const handlleChangeVK = (e) => {
    setVkLink(e.target.value);
  };
  const handlleChangePoR = (e) => {
    setPlaceOfResidence(e.target.value);
  };
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
            <Button className={style.personalButton} type="primary">
              Загрузить резюме
            </Button>
          </div>
          <div className={style.introduce__half}>
            <h2>Как правильно заполнять резюме?</h2>
            <div className={style.videoplayer}>iFrame Player</div>
          </div>
        </div>
        <div className={style.resume}>
          <h2>Ваше резюме</h2>
          <div className={style.resume__main}>
            <h2>Основная информация о себе</h2>
            <span className={style.resumeSpan}>Имя</span>
            <Input value={firstName} onChange={handlleChangeF} placeholder="" />
            <span className={style.resumeSpan}>Фамилия</span>
            <Input
              value={secondName}
              onChange={handlleChangeS}
              placeholder=""
            />
            <span className={style.resumeSpan}>Отчество</span>
            <Input value={thirdName} onChange={handlleChangeT} placeholder="" />
            <span className={style.resumeSpan}>Мобильный телефон</span>
            <Input value={tel} onChange={handlleChangePh} placeholder="" />
            <span className={style.resumeSpan}>Email</span>
            <Input value={email} onChange={handlleChangeE} placeholder="" />
            <span className={style.resumeSpan}>Telegram (никнейм)</span>
            <Input
              value={telegramIdentifier}
              onChange={handlleChangeTlgr}
              placeholder=""
            />
            <span className={style.resumeSpan}>Discord</span>
            <Input
              value={discordIdentifier}
              onChange={handlleChangeDsc}
              placeholder=""
            />
            <span className={style.resumeSpan}>Ссылка на Facebook</span>
            <Input value={fbLink} onChange={handlleChangeFB} placeholder="" />
            <span className={style.resumeSpan}>Ссылка на Вконтакте</span>
            <Input value={vkLink} onChange={handlleChangeVK} placeholder="" />
            <span className={style.resumeSpan}>Место проживания</span>
            <Input value={placeOfResidence} onChange={handlleChangePoR} placeholder="" />
            <span className={style.resumeSpan}>Дата рождения</span>
            <DatePicker
              onChange={(val) => setBirthdate(val)}
              defaultValue={moment(birthDate, dateFormat)}
              className={style.inputImitator}
              placeholder=""
            />
            <span className={style.resumeSpan}>Пол</span>
            <Radio.Group>
              <Radio value={0}>Мужской</Radio>
              <Radio value={1}>Женский</Radio>
            </Radio.Group>
            <br />
            <span className={style.resumeSpan}>Военный билет</span>
            <Radio.Group>
              <Radio value={1}>Есть</Radio>
              <Radio value={2}>Нет</Radio>
            </Radio.Group>
            <br />
            <span className={style.resumeSpan}>Гражданство</span>
            <Input placeholder="" />
          </div>
          <div className={style.resume__main}>
            <h2>Профессиональная деятельность</h2>
            <span className={style.resumeSpan}>Желаемая занятость</span>
            <Radio.Group>
              <Radio value={1}>Полная</Radio>
              <Radio value={2}>Частичная</Radio>
              <Radio value={1}>Проектная работа</Radio>
              <Radio value={2}>Стажировка</Radio>
            </Radio.Group>
            <br />
            <span className={style.resumeSpan}>Желаемый график работы</span>
            <Radio.Group>
              <Radio value={1}>Полный день</Radio>
              <Radio value={2}>Сменный график</Radio>
              <Radio value={1}>Гибкий график</Radio>
              <Radio value={2}>Удаленная работа</Radio>
              <Radio value={2}>Вахтовый метод</Radio>
            </Radio.Group>
            <br />
            <span className={style.resumeSpan__tall}>
              <b>Опыт работы</b>
            </span>
            <Button onClick={toggleVisibleWorkXP}>Добавить место работы</Button>
            {isVisibleWorkXP && (
              <div className={style.answerPopup}>
                <div className={style.answerContent}>
                  <Button
                    onClick={toggleVisibleWorkXP}
                    type="text"
                    className={style.closeButton}
                  >
                    X
                  </Button>
                  <div className={style.answerContent__text}>
                    <h3>Место работы</h3>
                    <span className={style.resumeAreaPopup}>Начало работы</span>
                    <DatePicker
                      className={style.datepicker}
                      placeholder="Выберите месяц"
                      picker="month"
                    />
                    <DatePicker
                      className={style.datepicker}
                      placeholder="Выберите год"
                      picker="year"
                    />
                    <br />
                    <span className={style.resumeAreaPopup}>
                      Окончание работы
                    </span>
                    <DatePicker
                      className={style.datepicker}
                      placeholder="Выберите месяц"
                      picker="month"
                    />
                    <DatePicker
                      className={style.datepicker}
                      placeholder="Выберите год"
                      picker="year"
                    />
                    <Checkbox className={style.littleElemMargin}>
                      По настоящее время
                    </Checkbox>
                    <Input
                      className={style.inputPopup}
                      placeholder="Место работы (полное название компании)"
                    />
                    <Input
                      className={style.inputPopup}
                      placeholder="Должность"
                    />
                    <TextArea
                      className={style.inputPopup}
                      placeholder="Выполняемые задачи"
                    />
                    <Button className={style.popupButton} type="primary">
                      Сохранить
                    </Button>
                  </div>
                </div>
              </div>
            )}
            <br />
            <span className={style.resumeArea}>Проектная деятельность</span>
            <TextArea placeholder="Расскажи о том, в каких проектах ты участвовал и в должности кого" />
            <span className={style.resumeArea}>Дополнительная информация</span>
            <TextArea placeholder="Расскажи о себе то, что думаешь не упомянул выше, но работодателю это полезно знать" />
          </div>
          <div className={style.resume__main}>
            <h2>О себе</h2>
            <span className={style.resumeSpan}>Знание языков</span>
            <Input placeholder="Язык, уровень знания" />
            <Button icon={<PlusOutlined />} />
            <span className={style.resumeArea}>Дополнительная информация</span>
            <TextArea placeholder="Расскажите о своих навыках, знаниях, увлечениях, мероприятиях в каких участвовали, волонтёрство" />
          </div>
          <div className={style.resume__main}>
            <h2>Образование</h2>
            <h3>Среднее общее образование</h3>
            <span className={style.resumeArea}>Начало обучения</span>
            <DatePicker
              className={style.datepicker}
              placeholder="Выберите год"
              picker="year"
            />
            <br />
            <span className={style.resumeArea}>Окончание обучения</span>
            <DatePicker
              className={style.datepicker}
              placeholder="Выберите год"
              picker="year"
            />
            <Checkbox className={style.littleElemMargin}>
              По настоящее время
            </Checkbox>
            <br />
            <span className={style.resumeSpan}>Название школы</span>
            <Input placeholder="" />
            <Button icon={<PlusOutlined />} />
            <h3>Среднее профессиональное образование / Высшее образование</h3>
            <Button className={style.centerButton}>
              Добавить учебное заведение
            </Button>
          </div>
          <div className={style.resume__main}>
            <h2>Дополнительное образование, курсы</h2>
            <p>
              Если есть дополнительные курсы или вы прошли переквалификацию и у
              вас есть сертификат, удостоверение о повышении квалификации,
              диплом о профессиональной переподготовке и т.д., то прикрепляй
              скан и получи дополнительные баллы к профилю!
            </p>
            <Button>
              Добавить сертификат
              <FolderAddOutlined className={style.iconSize} />
            </Button>
          </div>
          <Button
            disabled={isFetchingButton}
            className={style.personalButton}
            type="primary"
          >
            Сохранить
          </Button>
          <NavLink to="/profile/resume">
            <Button className={style.personalButton} type="primary">
              Назад
            </Button>
          </NavLink>
          <div className={style.resume__main}>
            <h2>Переход на этап “Стажировка”</h2>
            <div className={style.internshipBlock}>
              <p className={style.internshipText}>
                Для открытия следующего этапа “Стажировка” необходимо прикрепить
                сертификат, подтверждающий прохождение курса на этапе
                “Прохождение курса”
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
      </div>
      <div className={style.profile__personalinfo}>
        <h2>Сертификаты</h2>
        <div className={style.certificateBlock}>
          <div className={style.certificateBlock__img}>
            <img src="" alt="certificate img" />
          </div>
          <div className={style.certificateBlock__desc}>
            <h3 className={style.certificateTitle}>UX/UI дизайнер</h3>
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

export default ResumeEdit;
