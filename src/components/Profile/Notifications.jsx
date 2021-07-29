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
      <div>
        {notificationsData?.length ? notificationsData.map((mess) => (
          <div>
            <div>date</div>
            <div>
              <div>{mess.message}</div>
            </div>
            time
          </div>
        )) : "Уведомлений нет"}
      </div>
    </div>
  );
};

export default Notification;
