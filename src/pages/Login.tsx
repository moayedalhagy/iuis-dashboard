import { useMutation } from "@tanstack/react-query";

import apiLogin from "../api/ApiLogin";
import useAuthStore from "../store/AuthStore";
import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import classes from "../styles/notifications-filled.module.css";
export default function LoginPage() {
  const authStore = useAuthStore();

  const mutation = useMutation({
    mutationFn: apiLogin,

    onSuccess: (data: any) => {
      authStore.setUser(data.response);
    },

    onError: (err: any) => {
      let _err = err!.response.data;

      for (let key in _err.errors) {
        if (_err.errors.hasOwnProperty(key)) {
          notifications.show({
            title: "validation error",
            // message: `${key}: ${_err.errors[key]}`,
            message: `${_err.errors[key]}`,
            color: "red",
            position: "top-left",
            classNames: classes,
          });
        }
      }
    },
  });

  return (
    <div>
      <Button
        disabled={mutation.isPending}
        loading={mutation.isPending}
        onClick={() =>
          mutation.mutate({ username: "admin1", password: "12345678" })
        }
      >
        login page
      </Button>
    </div>
  );
}
