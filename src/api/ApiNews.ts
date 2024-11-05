import apiHandler from "../ApiConfig";

import { config } from "../types/interfaces/CustomAxiosRequestConfig";

export default async function apiNews() {
  config.authRequired = false;

  const response = await apiHandler.get("/CardsNews", config);
  console.log(response.config);
  return response.data;
}
