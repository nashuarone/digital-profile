import React, { useState } from "react";
import style from "../../scss/App.module.scss";
import Icon from "@ant-design/icons";
import { HeadLogoSvg } from "../../assets/forSvgExport";
import { Button, Input } from "antd";
import { FolderAddOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const HeadLogoIcon = (props) => <Icon component={HeadLogoSvg} {...props} />;

const Footer = () => {
  const [isVisibleFeedback, setVisibleFeedback] = useState(false);
  const toggleVisibleFeedback = () => {
    setVisibleFeedback(!isVisibleFeedback);
  };
  return (
    <div className={style.footer}>
      <div className={style.footer__inner}>
        <span className={style.footerSpan}>Контакты</span>
        <span className={style.footerSpan}>Телефон: +7 (927) 934-66-80</span>
        <span className={style.footerSpan}>Email: alb@karavaevteam.com</span>
        <span className={style.footerSpan}>Адрес: г. Уфа, пр. Октября 2</span>
        <span className={style.footerSpan}>
          <i className="fab fa-vk"></i>
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-telegram-plane"></i>
        </span>
      </div>
      <div className={style.footer__logo}>
        <HeadLogoIcon />
      </div>
      <div className={style.footer__feedback}>
        <Button
          onClick={toggleVisibleFeedback}
          className={style.footerFeedback}
        >
          Обратная связь
        </Button>
        <span className={style.footerFeedbackText}>2020-2021 ООО "TANDEM"</span>
        <span className={style.footerFeedbackText}>
          Политика конфиденциальности
        </span>
      </div>
      {isVisibleFeedback && (
        <div className={style.answerPopup}>
          <div className={style.answerContent}>
            <Button
              onClick={toggleVisibleFeedback}
              type="text"
              className={style.closeButton}
            >
              X
            </Button>
            <div className={style.answerContent__text}>
              <h3>Обратная связь</h3>
              <p className={style.feedbackText}>
                Добрый день! Опишите свой вопрос, и мы свяжемся с вами в
                ближайшее время.
              </p>
              <div className={style.feedbackInputs}>
                <Input
                  className={style.inputPopupName}
                  placeholder="Как к вам обращаться"
                />
                <Input className={style.inputPopupNum} placeholder="Телефон" />
              </div>
              <TextArea
                className={style.inputPopupArea}
                placeholder="Текст сообщения..."
              />
              <div className={style.feedbackInputs}>
                <Button className={style.popupButtonIcon}>
                  <FolderAddOutlined className={style.iconSize} />
                  Добавить сертификат
                </Button>
                <Button className={style.popupButton} type="primary">
                  Отправить
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
