import axios from "axios";

export const apiHandler = axios.create({
  baseURL: "https://api.iuis.university/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
});
