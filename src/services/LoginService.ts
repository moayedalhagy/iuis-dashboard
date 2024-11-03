import { useMutation } from "@tanstack/react-query";
import apiLogin from "../api/ApiLogin";

import useAuthStore from "../store/AuthStore";
import NotificationSuccess from "../components/NotificationSuccess";
import NotificationError from "../components/NotificationError";
import { useNavigate } from "react-router-dom";
import { PagePath } from "../PagePath";

export function useLoginService() {
  const authStore = useAuthStore();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: apiLogin,

    onSuccess: (data: any) => {
      authStore.setUser(data.data);

      NotificationSuccess({
        title: "Login success",
        message: `welcome ${data.data.name}`,
      });

      navigate(PagePath.home);
    },

    onError: (err: any) => {
      const _err = err!.response.data;

      for (const key in _err.errors) {
        // _err.errors.hasOwnProperty(key)
        if (Object.prototype.hasOwnProperty.call(_err.errors, key)) {
          NotificationError({
            title: "validation error",
            message: `${_err.errors[key]}`,
          });
        }
      }
    },
  });
}
