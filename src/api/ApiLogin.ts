import { LoginParamType } from "../types/LoginParamType";

import { apiHandler } from "../ApiConfig";

export default async function apiLogin({ username, password }: LoginParamType) {
  const response = await apiHandler.post("/Auth/authenticate", {
    userName: username,
    password: password,
  });
  return response.data;
}
