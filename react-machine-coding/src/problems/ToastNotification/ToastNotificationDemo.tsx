import React from "react";
import { useNotification, NotificationTypes } from "./ToastNotificationContext";

export const ToastNotificationDemo = () => {
  const { addNotification } = useNotification();

  const showNotification = (type: NotificationTypes) => {
    const newNotification = {
      id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      message: `This is a ${type.toUpperCase()} toast notification`,
      type,
      duration: 3000,
    };
    addNotification(newNotification);
  };

  return (
    <div className="buttons-container">
      <button
        className="button-success"
        onClick={() => showNotification(NotificationTypes.success)}
      >
        Success Notification
      </button>
      <button
        className="button-error"
        onClick={() => showNotification(NotificationTypes.error)}
      >
        Error Notification
      </button>
      <button
        className="button-info"
        onClick={() => showNotification(NotificationTypes.info)}
      >
        Info Notification
      </button>
    </div>
  );
};
