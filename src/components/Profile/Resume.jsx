import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import style from "../../scss/Profile.module.scss";
import { Button } from "antd";
import { FolderAddOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { getProfilePhoto } from "../../redux/storageReducer";
import { getResume } from "../../redux/resumeReducer";

const baseImgURL = `https://tandemteam.site`;
let defaultPhotoLink = `/api/storage-file/487d89df-2f87-4049-8c9e-c847b66954c1`;

const Resume = () => {
  const dispatch = useDispatch();
  const userData = useSelector((s) => s.auth.userData);
  const resumeData = useSelector((s) => s.resume.resumeData);
  const profilePhotoFileLink = useSelector((s) => s.storage.profilePhotoFileLink);

  let workEmploye = ""
  if (resumeData.desiredEmployment === 0) {
    workEmploye = "Полная"
  }
  if (resumeData.desiredEmployment === 1) {
    workEmploye = "Частичная"
  }
  if (resumeData.desiredEmployment === 2) {
    workEmploye = "Проектная работа"
  }
  if (resumeData.desiredEmployment === 3) {
    workEmploye = "Стажировка"
  }
  let workGraphic = ""
  if (resumeData.desiredWorkSchedule === 0) {
    workGraphic = "Полный день"
  }
  if (resumeData.desiredWorkSchedule === 1) {
    workGraphic = "Сменный график"
  }
  if (resumeData.desiredWorkSchedule === 2) {
    workGraphic = "Гибкий график"
  }
  if (resumeData.desiredWorkSchedule === 3) {
    workGraphic = "Удаленная работа"
  }
  if (resumeData.desiredWorkSchedule === 4) {
    workGraphic = "Вахтовый метод"
  }

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
          <h2 className={style.h2size}>Мое резюме</h2>
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
                src={`${baseImgURL}${
                  profilePhotoFileLink ? profilePhotoFileLink : defaultPhotoLink
                }`}
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
                  <span className={style.resumeInfo__inner}>
                    {userData.tel}
                  </span>
                </div>
                <div className={style.resumeInfo}>
                  <span className={style.resumeInfo__innerIcon}>
                    <MailOutlined />
                  </span>
                  <span className={style.resumeInfo__inner}>
                    {userData.email}
                  </span>
                </div>
                <div className={style.resumeInfo}>
                  <span className={style.resumeInfo__innerIcon}>
                    <i className="fab fa-telegram-plane"></i>
                  </span>
                  <span className={style.resumeInfo__inner}>
                    {resumeData.telegramIdentifier}
                  </span>
                </div>
                <div className={style.resumeInfo}>
                  <span className={style.resumeInfo__innerIcon}>
                    <i className="fab fa-discord"></i>
                  </span>
                  <span className={style.resumeInfo__inner}>
                    {resumeData.discordIdentifier}
                  </span>
                </div>
                <div className={style.resumeInfo}>
                  <span className={style.resumeInfo__innerIcon}>
                    <i className="fab fa-vk"></i>
                  </span>
                  <span className={style.resumeInfo__inner}>
                    {resumeData.vkLink}
                  </span>
                </div>
                <div className={style.resumeInfo}>
                  <span className={style.resumeInfo__innerIcon}>
                    <i className="fab fa-facebook"></i>
                  </span>
                  <span className={style.resumeInfo__inner}>
                    {resumeData.fbLink}
                  </span>
                </div>
              </div>
              <div className={style.hhBlocks__right}>
                <div className={style.resumeInfo}>
                  <span className={style.resumeInfo__innerStock}>
                    Место жительства:
                  </span>
                  <span className={style.resumeInfo__inner}>
                    {resumeData.placeOfResidence}
                  </span>
                </div>
                <div className={style.resumeInfo}>
                  <span className={style.resumeInfo__innerStock}>
                    Дата рождения:
                  </span>
                  <span className={style.resumeInfo__inner}>
                    {userData.birthDate
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join(".")}
                  </span>
                </div>
                <div className={style.resumeInfo}>
                  <span className={style.resumeInfo__innerStock}>Пол:</span>
                  <span className={style.resumeInfo__inner}>
                    {resumeData.sex === 0 ? "Мужской" : "Женский"}
                  </span>
                </div>
                <div className={style.resumeInfo}>
                  <span className={style.resumeInfo__innerStock}>
                    Военный билет:
                  </span>
                  <span className={style.resumeInfo__inner}>
                    {resumeData.militaryTicker ? "Есть" : "Нет"}
                  </span>
                </div>
                <div className={style.resumeInfo}>
                  <span className={style.resumeInfo__innerStock}>
                    Гражданство:
                  </span>
                  <span className={style.resumeInfo__inner}>
                    {resumeData.citizenship}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.resume__main}>
            <h2>Профессиональная деятельность</h2>
            <span className={style.resumeSpan}>Желаемая занятость</span>
            <span className={style.userInfo__inner}>{workEmploye}</span>
            <br />
            <span className={style.resumeSpan}>Желаемый график работы</span>
            <span className={style.userInfo__inner}>{workGraphic}</span>
            <br />
            <span className={style.resumeSpan__tall}>
              <b className={style.h2size}>Опыт работы</b>
            </span>
            {resumeData?.workExperiences?.length
              ? resumeData.workExperiences.map((work) => (
                  <div className={style.hhBlocks}>
                    <div className={style.hhBlocks__left}>
                      <div className={style.resumeInfo}>
                        <span className={style.userInfo__innerClear}>
                          {work.startDate
                            .slice(0, 10)
                            .split("-")
                            .reverse()
                            .join(".")}
                        </span>
                        <span className={style.userInfo__innerMinus}>-</span>
                        <span className={style.userInfo__innerClear}>
                          {work.endDate
                            ? work.endDate
                                .slice(0, 10)
                                .split("-")
                                .reverse()
                                .join(".")
                            : "По настоящее время"}
                        </span>
                      </div>
                    </div>
                    <div className={style.hhBlocks__right}>
                      <div className={style.workInfo}>
                        <span className={style.userInfo__innerStock}>
                          {work.organization}
                        </span>
                        <span className={style.userInfo__inner}>
                          {work.position}
                        </span>
                        <span className={style.workInfo__innerClear}>
                          {work.duty}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              : "Опыт работы не указан"}
            <br />
            <span className={style.resumeSpan__long}>
              <b className={style.h2size}>Проектная деятельность</b>
            </span>
            {resumeData?.projectActivities?.length
              ? resumeData.projectActivities.map((proj) => (
                  <div className={style.hhBlocks}>
                    {/* <div className={style.hhBlocks__left}>
                  <div className={style.resumeInfo}>
                    <span className={style.userInfo__innerClear}>
                      {proj ? proj.startDate.slice(0, 10).split("-").reverse().join(".") : null}
                    </span>
                    <span className={style.userInfo__innerMinus}>
                      -
                    </span>
                    <span className={style.userInfo__innerClear}>
                      {proj.endDate ? proj.endDate.slice(0, 10).split("-").reverse().join(".") : "По настоящее время"}
                    </span>
                  </div>
                </div> */}
                    <div className={style.hhBlocks__right}>
                      <div className={style.workInfo}>
                        <span className={style.workInfo__innerClear}>
                          {proj.description}
                        </span>
                        <span className={style.workInfo__innerClear}>
                          <a href={proj.link}> {proj.link}</a>
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              : "Проектная деятельность не указана"}
            <br />
            <span className={style.resumeSpan__long}>
              Дополнительная информация
            </span>
            {resumeData.additionalInformation}
          </div>
          <div className={style.resume__main}>
            <h2>О себе</h2>
            <span className={style.resumeSpan}>Знание языков</span>
            <span className={style.resumeSpanLikeBlock}>
              {resumeData?.availableLanguages?.length
                ? resumeData.availableLanguages.map((lang) => (
                    <span className={style.resumeSpanLikeBlock}>
                      <span className={style.userInfo__inner}>
                        {lang.language}
                      </span>
                      <span> - </span>
                      <span className={style.userInfo__inner}>
                        {lang.level}
                      </span>
                    </span>
                  ))
                : "Языки не указаны"}
            </span>
            <br />
            <span className={style.resumeSpan__long}>
              Дополнительная информация
            </span>
            {resumeData.aboutMe}
          </div>
          <div className={style.resume__main}>
            <h2>Образование</h2>
            <span className={style.resumeSpan__long}>
              Среднее общее образование
            </span>
            {resumeData?.secondaryGeneralEducations?.length
              ? resumeData.secondaryGeneralEducations.map((school) => (
                  <div className={style.hhBlocks}>
                    <div className={style.hhBlocks__left}>
                      <div className={style.resumeInfo}>
                        <span className={style.userInfo__innerClear}>
                          {school.startDate
                            .slice(0, 10)
                            .split("-")
                            .reverse()
                            .join(".")}
                        </span>
                        <span className={style.userInfo__innerMinus}>-</span>
                        <span className={style.userInfo__innerClear}>
                          {school.endDate
                            ? school.endDate
                                .slice(0, 10)
                                .split("-")
                                .reverse()
                                .join(".")
                            : "По настоящее время"}
                        </span>
                      </div>
                    </div>
                    <div className={style.hhBlocks__right}>
                      <div className={style.workInfo}>
                        <span className={style.workInfo__innerClear}>
                          {school.schoolName}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              : "Школы не указаны"}
            <br />
            <span className={style.resumeSpan__long}>
              Среднее профессиональное образование / Высшее образование
            </span>
            {resumeData?.otherEducation?.length
              ? resumeData.otherEducation.map((highSchool) => (
                  <div className={style.hhBlocks}>
                    <div className={style.hhBlocks__left}>
                      <div className={style.resumeInfo}>
                        <span className={style.userInfo__innerClear}>
                          {highSchool.startDate
                            .slice(0, 10)
                            .split("-")
                            .reverse()
                            .join(".")}
                        </span>
                        <span className={style.userInfo__innerMinus}>-</span>
                        <span className={style.userInfo__innerClear}>
                          {highSchool.endDate
                            ? highSchool.endDate
                                .slice(0, 10)
                                .split("-")
                                .reverse()
                                .join(".")
                            : "По настоящее время"}
                        </span>
                      </div>
                    </div>
                    <div className={style.hhBlocks__right}>
                      <div className={style.workInfo}>
                        <span className={style.userInfo__innerStock}>
                          {highSchool.level === 0
                            ? "Среднее профессиональное образование"
                            : highSchool.level === 1
                            ? "Высшее образование (бакалавриат)"
                            : highSchool.level === 2
                            ? "Высшее образование (магистратура)"
                            : highSchool.level === 3
                            ? "Высшее образование (аспирантура)"
                            : "Высшее образование (специалитет)"}
                        </span>
                        <span className={style.workInfo__innerClear}>
                          {highSchool.institution}
                        </span>
                        <span className={style.workInfo__innerClear}>
                          {highSchool.specialization}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              : "Образование не указано"}
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
