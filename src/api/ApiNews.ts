import axios from "axios";
import apiHandler from "../ApiConfig";

import { config } from "../types/interfaces/CustomAxiosRequestConfig";

export async function getNews() {
  config.authRequired = true;

  const response = await apiHandler.get("/CardsNews", config);

  return response.data;
}

export async function createNews(data: any) {
  config.authRequired = true;

  const datax = {
    newsCategoryId: 1,
    cardImageLink: "string",
    title: "string",
    description: "string",
    newsDate: "2021-01-01",
    newsTime: "12:00:00",
    newsBodyText: "string",
    newsLink: "string",
    views: 0,
  };
  const response = await apiHandler.post("/CardsNews", datax);
  return response;
}

export async function updateNews() {}

export async function deleteNews() {}
