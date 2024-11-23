import apiHandler from "../ApiConfig";

import { config } from "../types/interfaces/CustomAxiosRequestConfig";

const endpoint = "/NewsCategoriesNames";

export const apiGet = async () => await apiHandler.get(`${endpoint}`, config);

export const apiCreate = async (data: any) =>
  await apiHandler.post(`${endpoint}`, data);

export const apiUpdate = async (id: number, data: any) =>
  await apiHandler.put(`${endpoint}/${id}`, data);

export const apiDelete = async (id: number) =>
  await apiHandler.delete(`${endpoint}/${id}`, config);
