import apiHandler from "../ApiConfig";

import { config } from "../types/interfaces/CustomAxiosRequestConfig";

export default async function apiNews() {
  config.authRequired = true;

  const response = await apiHandler.get("/CardsNews", config);

  return response.data;
}
