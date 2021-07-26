import React from "react";
import style from "../../scss/Diagnostics.module.scss";
import { Button } from "antd";

const Diagnostics = () => {
  return (
    <div className={style.diagnostics}>
      <h1>Диагностика</h1>
      <div>
        <p>описание</p>
        <div disabled className={style.testsBlock}>
          <div className={style.testsBlock__test}>
            <h3><strong>Собеседование</strong></h3>
            <span>hashtag</span>
            <div className={style.testDescription}>opisanie</div>
            <Button>Пройти</Button>
          </div>
        </div>
        <Button className={style.diagnosticsDone}>Завершить</Button>
      </div>
    </div>
  );
};

export default Diagnostics;
