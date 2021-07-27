import React from "react";
import style from "../../scss/Diagnostics.module.scss";
import { Button } from "antd";

const Diagnostics = () => {
  return (
    <div className={style.diagnostics}>
      <h1>Диагностика</h1>
      <div>
        <p>
          Добро пожаловать на диагностику TandemTeam! Здесь мы будем проходить с
          вами тесты и задания, ориентированные на выявление и проработку soft
          skills и экзистенциальных навыков. Все данные, которые мы будем
          получать, будут проверены нашими экспертами и загружаться в цифровой
          профиль.
        </p>
        <p>
          Также после решения всех тестов и заданий не забудь нажать кнопку
          «Завершить» на странице диагностики, это запустит процесс проверки
          твоих ответов, которая будет длиться до 3 дней. После чего тебе придёт
          уведомление о загрузке результатов.
        </p>
        <div className={style.testsBlock}>
          <div className={style.testsBlock__test}>
            <h3>
              <strong>Собеседование часть 1</strong>
            </h3>
            <span className={style.hashtagsColor}>#Тестирование</span>
            <div className={style.testDescription}>
              Здесь мы поговорим о тебе, о твоих увлечениях, навыках, желаемых
              результатах.
            </div>
            <a href="https://forms.gle/e39i2CsAoCGcRvn98">
              <Button>Пройти</Button>
            </a>
          </div>
          <div className={style.testsBlock__test}>
            <h3>
              <strong>Собеседование часть 2</strong>
            </h3>
            <span className={style.hashtagsColor}>#Тестирование</span>
            <div className={style.testDescription}>
              Данное тестирование довольно объемное, но за счёт этого мы сможем
              сформировать более подробное представление о твоих soft и
              экзистенциальных навыках.{" "}
            </div>
            <a href="https://forms.gle/uNCLZysuUiYCJ3jC9">
              <Button>Пройти</Button>
            </a>
          </div>
        </div>
        <Button className={style.diagnosticsDone}>Завершить</Button>
      </div>
    </div>
  );
};

export default Diagnostics;
