import React from "react";
import style from "../../scss/Profile.module.scss";
import { Button, Input, Radio } from "antd";

const { TextArea } = Input;


const Resume = () => {
  return (
    <div className={style.profile__personalinfo}>
      <div className={style.introduce}>
        <div className={style.introduce__half}>
          <h2>Для чего необходимо ваше резюме?</h2>
          <p>
            Ваше резюме необходимо для того, чтобы мы смогли отследить динамику
            вашего роста, а вы наглядно заметить разницу навыков с момента
            вашего входа и на протяжении всего пути
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
        </div>
      </div>
    </div>
  );
};

export default Resume;
