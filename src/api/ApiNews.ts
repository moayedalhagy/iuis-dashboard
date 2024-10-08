import { apiHandler } from "../ApiConfig";

export default async function apiNews() {
  const response = await apiHandler.get("/CardsNews");
  return response.data;
}
