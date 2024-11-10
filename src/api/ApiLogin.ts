import { LoginParamType } from "../types/LoginParamType";

import apiHandler from "../ApiConfig";
import { config } from "../types/interfaces/CustomAxiosRequestConfig";

export default async function apiLogin({ username, password }: LoginParamType) {
  config.authRequired = false;

  const response = await apiHandler.post(
    "/Auth/authenticate",
    {
      userName: username,
      password: password,
    },
    config
  );
  return response.data;
}
