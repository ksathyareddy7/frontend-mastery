import React from "react";
import { Notification } from "./ToastNotificationContext";

export const CustomToast = ({ message, type }: Notification) => {
  return (
    <div className={`custom-toast custom-${type}`}>
      <p>{message}</p>
    </div>
  );
};
