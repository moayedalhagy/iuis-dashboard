import apiHandler from "../ApiConfig";

import { config } from "../types/interfaces/CustomAxiosRequestConfig";

const endpoint = "/CardsNews";

export async function getNews() {
  config.authRequired = true;

  const response = await apiHandler.get(`${endpoint}`, config);

  return response.data;
}

export async function createNews(data: any) {
  config.authRequired = true;

  // const datax = {
  //   newsCategoryId: 1,
  //   cardImageLink: "string",
  //   title: "string",
  //   description: "string",
  //   newsDate: "2021-01-01",
  //   newsTime: "12:00:00",
  //   newsBodyText: "string",
  //   newsLink: "string",
  //   views: 0,
  // };
  const response = await apiHandler.post(`${endpoint}`, data);
  return response;
}

export async function apiUpdate(id: number, data: any) {
  config.authRequired = true;

  const response = await apiHandler.put(`${endpoint}/${id}`, data);
  return response;
}

export async function deleteNews(id: number) {
  config.authRequired = true;

  const response = await apiHandler.delete(`${endpoint}/${id}`, config);

  return response.data;
}
