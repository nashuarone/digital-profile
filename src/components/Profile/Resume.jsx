import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import style from "../../scss/Profile.module.scss";
import { Button, Checkbox, DatePicker, Input } from "antd";
import { FolderAddOutlined, PlusOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { getProfilePhoto } from "../../redux/storageReducer";
import { getResume } from "../../redux/resumeReducer";

const { TextArea } = Input;
const baseImgURL = `https://tandemteam.site`;
let defaultPhotoLink = `/api/storage-file/487d89df-2f87-4049-8c9e-c847b66954c1`;

const Resume = () => {
  const dispatch = useDispatch();
  const userData = useSelector((s) => s.auth.userData);
  const resumeData = useSelector((s) => s.resume.resumeData);
  const profilePhotoFileLink = useSelector((s) => s.storage.profilePhotoFileLink);
  const [isVisibleWorkXP, setVisibleWorkXP] = useState(false);
  const toggleVisibleWorkXP = () => {
    setVisibleWorkXP(!isVisibleWorkXP);
  };
  useEffect(() => {
    if (userData.photo) {
      dispatch(getProfilePhoto(userData.photo))
    }
  }, [dispatch, userData.photo, profilePhotoFileLink]);
  useEffect(() => {
    if (userData.resume) {
      dispatch(getResume(userData.resume))
    }
  }, [dispatch, userData.resume]);
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
              Скачать резюме
            </Button>
          </div>
          <div className={style.introduce__half}>
            <h2>Как правильно заполнять резюме?</h2>
            <div className={style.videoplayer}>iFrame Player</div>
          </div>
        </div>
        <div className={style.resume}>
          <h2>Мое резюме</h2>
          <div className={style.personalBlock}>
          <div className={style.personalBlock__left}>
            <div className={style.userInfo}>
              <span className={style.userInfo__innerBig}>
                {userData.secondName}
              </span>
              <span className={style.userInfo__innerBig}>
                {userData.firstName}
              </span>
              <span className={style.userInfo__innerBig}>
                {userData.thirdName}
              </span>
            </div>



          </div>
          <div className={style.personalBlock__right}>
            <img
              className={style.avatar}
              src={`${baseImgURL}${profilePhotoFileLink ? profilePhotoFileLink : defaultPhotoLink}`}
              alt="avatar"
            />
          </div>
        </div>
          <div className={style.resume__main}>
            <h2>Основная информация о себе</h2>
            <div className={style.hhBlocks}>
              <div className={style.hhBlocks__left}>
                <div className={style.resumeInfo}>
                  <span className={style.resumeInfo__innerIcon}>
                    <PhoneOutlined />
                  </span>
                  <span className={style.resumeInfo__inner}>{userData.tel}</span>
                </div>
                <div className={style.resumeInfo}>
                  <span className={style.resumeInfo__innerIcon}>
                    <MailOutlined />
                  </span>
                  <span className={style.resumeInfo__inner}>{userData.email}</span>
                </div>
                <div className={style.resumeInfo}>
                  <span className={style.resumeInfo__innerIcon}>
                    <i className="fab fa-telegram-plane"></i>
                  </span>
                  <span className={style.resumeInfo__inner}>{userData.email}</span>
                </div>
                <div className={style.resumeInfo}>
                  <span className={style.resumeInfo__innerIcon}>
                    <i className="fab fa-discord"></i>
                  </span>
                  <span className={style.resumeInfo__inner}>{userData.email}</span>
                </div>
                <div className={style.resumeInfo}>
                  <span className={style.resumeInfo__innerIcon}>
                    <i className="fab fa-vk"></i>
                  </span>
                  <span className={style.resumeInfo__inner}>{userData.email}</span>
                </div>
                <div className={style.resumeInfo}>
                  <span className={style.resumeInfo__innerIcon}>
                    <i className="fab fa-facebook"></i>
                  </span>
                  <span className={style.resumeInfo__inner}>{userData.email}</span>
                </div>
              </div>
              <div className={style.hhBlocks__right}>
                <div className={style.userInfo}>
                  <span className={style.userInfo__innerStock}>Место жительства:</span>
                  <span className={style.userInfo__inner}>
                    {resumeData.placeOfResidence}
                  </span>
                </div>
                <div className={style.userInfo}>
                  <span className={style.userInfo__innerStock}>Дата рождения:</span>
                  <span className={style.userInfo__inner}>
                    {userData.birthDate.slice(0, 10).split("-").reverse().join(".")}
                  </span>
                </div>
                <div className={style.userInfo}>
                  <span className={style.userInfo__innerStock}>Пол:</span>
                  <span className={style.userInfo__inner}>
                    {resumeData.sex === 0 ? "Мужской" : "Женский"}
                  </span>
                </div>
                <div className={style.userInfo}>
                  <span className={style.userInfo__innerStock}>Военный билет:</span>
                  <span className={style.userInfo__inner}>
                    {resumeData.militaryTicker ? "Есть" : "Нет"}
                  </span>
                </div>
                <div className={style.userInfo}>
                  <span className={style.userInfo__innerStock}>Гражданство:</span>
                  <span className={style.userInfo__inner}>
                    {resumeData.citizenship}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.resume__main}>
            <h2>Профессиональная деятельность</h2>
            <span className={style.resumeSpan}>Желаемая занятость</span>
            <span className={style.userInfo__inner}>
              {userData.birthDate.slice(0, 10).split("-").reverse().join(".")}
            </span>
            <br />
            <span className={style.resumeSpan}>Желаемый график работы</span>
            <span className={style.userInfo__inner}>
              {userData.birthDate.slice(0, 10).split("-").reverse().join(".")}
            </span>
            <br />
            <span className={style.resumeSpan__tall}>
              <b>Опыт работы</b>
            </span>
            <div className={style.hhBlocks}>
              <div className={style.hhBlocks__left}>
                <div className={style.resumeInfo}>
                  <span className={style.userInfo__inner}>
                    {userData.birthDate.slice(0, 10).split("-").reverse().join(".")}
                  </span>
                  <span className={style.userInfo__inner}>
                    -
                  </span>
                  <span className={style.userInfo__inner}>
                    {userData.birthDa ? userData.birthDa : "По настоящее время"}
                  </span>
                </div>
                <div className={style.resumeInfo}>
                  <span className={style.resumeInfo__innerIcon}>
                    <i className="fab fa-facebook"></i>
                  </span>
                  <span className={style.resumeInfo__inner}>{userData.email}</span>
                </div>
              </div>
              <div className={style.hhBlocks__right}>
                <div className={style.userInfo}>
                  <span className={style.userInfo__innerStock}>Место жительства:</span>
                  <span className={style.userInfo__inner}>
                    {userData.birthDate.slice(0, 10).split("-").reverse().join(".")}
                  </span>
                </div>
                <div className={style.userInfo}>
                  <span className={style.userInfo__innerStock}>Дата рождения:</span>
                  <span className={style.userInfo__inner}>
                    {userData.birthDate.slice(0, 10).split("-").reverse().join(".")}
                  </span>
                </div>
                <div className={style.userInfo}>
                  <span className={style.userInfo__innerStock}>Пол:</span>
                  <span className={style.userInfo__inner}>
                    {userData.birthDate.slice(0, 10).split("-").reverse().join(".")}
                  </span>
                </div>
                <div className={style.userInfo}>
                  <span className={style.userInfo__innerStock}>Военный билет:</span>
                  <span className={style.userInfo__inner}>
                    {userData.birthDate.slice(0, 10).split("-").reverse().join(".")}
                  </span>
                </div>
                <div className={style.userInfo}>
                  <span className={style.userInfo__innerStock}>Гражданство:</span>
                  <span className={style.userInfo__inner}>
                    {userData.birthDate.slice(0, 10).split("-").reverse().join(".")}
                  </span>
                </div>
              </div>
            </div>
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
          <NavLink to="/profile/resume-editor">
            <Button className={style.personalButton} type="primary">
              Редактировать
            </Button>
          </NavLink>
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

export default Resume;
