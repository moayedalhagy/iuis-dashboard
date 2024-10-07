import { useMutation } from "@tanstack/react-query";
import apiLogin from "../api/ApiLogin";

import useAuthStore from "../store/AuthStore";
import NotificationSuccess from "../components/NotificationSuccess";
import NotificationError from "../components/NotificationError";

export function useLoginService() {
  const authStore = useAuthStore();

  return useMutation({
    mutationFn: apiLogin,

    onSuccess: (data: any) => {
      authStore.setUser(data.data);

      NotificationSuccess({
        title: "Login success",
        message: `welcome ${data.data.name}`,
      });
    },

    onError: (err: any) => {
      let _err = err!.response.data;

      for (let key in _err.errors) {
        if (_err.errors.hasOwnProperty(key)) {
          NotificationError({
            title: "validation error",
            message: `${_err.errors[key]}`,
          });
        }
      }
    },
  });
}
