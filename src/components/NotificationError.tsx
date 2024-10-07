import { notifications } from "@mantine/notifications";
import classes from "../styles/notifications-filled.module.css";

export default function NotificationError({ title, message }: any) {
  return notifications.show({
    title: `${title}`,
    message: `${message}`,
    color: "red",
    position: "top-left",
    classNames: classes,
  });
}
