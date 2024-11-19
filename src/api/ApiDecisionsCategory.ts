import apiHandler from "../ApiConfig";

import { config } from "../types/interfaces/CustomAxiosRequestConfig";

const endpoint = "/DecisionsTypes";

export async function apiGet() {
  config.authRequired = true;

  const response = await apiHandler.get(`${endpoint}`, config);

  return response.data;
}

export async function apiCreate(data: any) {
  config.authRequired = true;

  const response = await apiHandler.post(`${endpoint}`, data);
  return response;
}

export async function apiUpdate(id: number, data: any) {
  config.authRequired = true;

  const response = await apiHandler.put(`${endpoint}/${id}`, data);
  return response;
}

export async function apiDelete(id: number) {
  config.authRequired = true;

  const response = await apiHandler.delete(`${endpoint}/${id}`, config);

  return response.data;
}
