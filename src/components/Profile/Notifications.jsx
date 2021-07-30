import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "../../redux/notificationsReducer";
import style from "../../scss/Profile.module.scss";

const Notification = () => {
  const dispatch = useDispatch();
  const userId = useSelector((s) => s.auth.userData.id);
  const notificationsData = useSelector(
    (s) => s.notifications.notificationsData
  );
  useEffect(() => {
    dispatch(getNotifications(userId))
  }, [dispatch, userId]);
  return (
    <div className={style.profile__personalinfo}>
      <h1>Уведомления</h1>
      <div className={style.notificationsBlock}>
        {notificationsData?.length
          ? notificationsData.map((mess) => (
              <div key={mess.id} className={style.notificationElement}>
                <div className={style.notificationDate}>
                  {mess.createdAt.slice(0, 10).split("-").reverse().join(".")}
                </div>
                <div className={style.notificationMessage}>
                  <div>{mess.message}</div>
                </div>
                <div className={style.notificationTime}>
                  {mess.createdAt.slice(11, 16)}
                </div>
              </div>
            ))
          : "Уведомлений нет"}
      </div>
    </div>
  );
};

export default Notification;
