/* 
   𝗛𝗼𝘄 𝘄𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗶𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 𝗮 𝘁𝗼𝗮𝘀𝘁 𝗻𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝘀𝘆𝘀𝘁𝗲𝗺 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁?
 - Describe how to handle global notification state and display logic.
 - How would you queue multiple notifications, set timeouts, and avoid overlapping?
 - Would you use Context, Redux, or a custom event system?
*/

import React from "react";
import { ToastNotificationProvider } from "./ToastNotificationContext";
import { ToastContainer } from "./ToastContainer";
import { ToastNotificationDemo } from "./ToastNotificationDemo";
import "./ToastNotification.styles.css";
import { CustomToast } from "./CustomToast";

export const ToastNotification = () => {
  return (
    <ToastNotificationProvider customComponent={CustomToast}>
      <ToastContainer />
      <ToastNotificationDemo />
    </ToastNotificationProvider>
  );
};
