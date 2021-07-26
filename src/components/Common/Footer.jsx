import React, { useEffect, useState } from "react";
import style from "../../scss/App.module.scss";
import Icon, { CloseOutlined } from "@ant-design/icons";
import { HeadLogoSvg } from "../../assets/forSvgExport";
import { Button, Input, message } from "antd";
import { FolderAddOutlined } from "@ant-design/icons";
import { sendFeedback } from "../../redux/feedbackReducer";
import { useDispatch, useSelector } from "react-redux";

const { TextArea } = Input;

const HeadLogoIcon = (props) => <Icon component={HeadLogoSvg} {...props} />;

const Footer = () => {
  const dispatch = useDispatch();
  const success_message = useSelector((s) => s.feedback.success_message);
  const [isVisibleFeedback, setVisibleFeedback] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [userMessage, setMessage] = useState("");
  const toggleVisibleFeedback = () => {
    setVisibleFeedback(!isVisibleFeedback);
  };
  const handlleChangeE = (e) => {
    setEmail(e.target.value);
  };
  const handlleChangeN = (e) => {
    setName(e.target.value);
  };
  const handlleChangeT = (e) => {
    setTel(e.target.value);
  };
  const handlleChangeM = (e) => {
    setMessage(e.target.value);
  };
  const changeSuccess = (success_message) => {
    message.success(success_message);
  };
  useEffect(() => {
    if (success_message) {
      changeSuccess(success_message);
    }
  }, [success_message]);
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
              <CloseOutlined className={style.closeButtonIcon} />
            </Button>
            <div className={style.answerContent__text}>
              <h3>Обратная связь</h3>
              <p className={style.feedbackText}>
                Добрый день! Опишите свой вопрос, и мы свяжемся с вами в
                ближайшее время.
              </p>
              <div className={style.feedbackInputs}>
                <Input
                  className={style.inputPopupNameLong}
                  value={name}
                  onChange={handlleChangeN}
                  placeholder="Как к вам обращаться"
                />
              </div>
              <div className={style.feedbackInputs}>
                <Input
                  className={style.inputPopupName}
                  value={email}
                  onChange={handlleChangeE}
                  placeholder="Ваш email"
                />
                <Input
                  className={style.inputPopupNum}
                  value={tel}
                  onChange={handlleChangeT}
                  placeholder="Телефон"
                />
              </div>
              <TextArea
                className={style.inputPopupArea}
                value={userMessage}
                onChange={handlleChangeM}
                placeholder="Текст сообщения..."
              />
              <div className={style.feedbackInputs}>
                <Button
                  disabled
                  title="В разработке..."
                  className={style.popupButtonIcon}
                >
                  <FolderAddOutlined className={style.iconSize} />
                  Добавить файл
                </Button>
                <Button
                  onClick={() =>
                    dispatch(sendFeedback(name, tel, email, userMessage))
                  }
                  className={style.popupButton}
                  type="primary"
                >
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
