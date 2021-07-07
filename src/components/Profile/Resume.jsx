import React from "react";
import style from "../../scss/Profile.module.scss";
import { Button, Checkbox, DatePicker, Input, Radio } from "antd";
import { FolderAddOutlined, PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;


const Resume = () => {
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
            <Input placeholder="" />
            <span className={style.resumeSpan}>Фамилия</span>
            <Input placeholder="" />
            <span className={style.resumeSpan}>Отчество</span>
            <Input placeholder="" />
            <span className={style.resumeSpan}>Мобильный телефон</span>
            <Input placeholder="" />
            <span className={style.resumeSpan}>Email</span>
            <Input placeholder="" />
            <span className={style.resumeSpan}>Telegram (никнейм)</span>
            <Input placeholder="" />
            <span className={style.resumeSpan}>Discord</span>
            <Input placeholder="" />
            <span className={style.resumeSpan}>Ссылка на Facebook</span>
            <Input placeholder="" />
            <span className={style.resumeSpan}>Ссылка на Вконтакте</span>
            <Input placeholder="" />
            <span className={style.resumeSpan}>Место проживания</span>
            <Input placeholder="" />
            <span className={style.resumeSpan}>Дата рождения</span>
            <Input placeholder="" />
            <span className={style.resumeSpan}>Пол</span>
            <Radio.Group>
              <Radio value={1}>Мужской</Radio>
              <Radio value={2}>Женский</Radio>
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
              <Radio value={2}>Вахтовыый метод</Radio>
            </Radio.Group>
            <br />
            <span className={style.resumeSpan__tall}>
              <b>Опыт работы</b>
            </span>
            <Button>Добавить место работы</Button>
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
          <Button className={style.personalButton} type="primary">
            Сохранить
          </Button>
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
      </div>
    </div>
  );
};

export default Resume;
