import { notifications } from "@mantine/notifications";
import classes from "../styles/notifications-filled.module.css";

export default function NotificationSuccess({ title, message }: any) {
  return notifications.show({
    title: `${title}`,
    message: `${message}`,
    color: "green",
    position: "top-left",
    classNames: classes,
  });
}
