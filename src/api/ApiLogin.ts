import { LoginParamType } from "../types/LoginParamType";

import { apiHandler } from "../ApiConfig";

export default async function apiLogin({ username, password }: LoginParamType) {
  const response = await apiHandler.post("/Auth/authenticate", {
    userNamez: username,
    password: password,
  });
  return response.data;
}
