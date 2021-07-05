import React from "react";
import style from "../../scss/App.module.scss";
import Icon from "@ant-design/icons";
import { HeadLogoSvg } from "../../assets/forSvgExport";
import { Button } from "antd";

const HeadLogoIcon = (props) => <Icon component={HeadLogoSvg} {...props} />;

const Footer = () => {
  return (
    <div className={style.footer}>
      <div>
        <span>Контакты</span>
        <span>Телефон: +7 (927) 934-66-80</span>
        <span>Email: alb@karavaevteam.com</span>
        <span>Адрес: г. Уфа, пр. Октября 2</span>
        <span>
          <i className="fab fa-vk"></i>
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-telegram-plane"></i>
        </span>
      </div>
      <div className={style.footer__logo}>
        <HeadLogoIcon />
      </div>
      <div className={style.footer__feedback}>
        <Button className={style.footerFeedback}>Обратная связь</Button>
        <span className={style.footerFeedbackText}>2020-2021 ООО "TANDEM"</span>
        <span className={style.footerFeedbackText}>Политика конфиденциальности</span>
      </div>
    </div>
  );
};

export default Footer;
