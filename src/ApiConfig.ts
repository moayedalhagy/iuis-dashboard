import axios, { InternalAxiosRequestConfig } from "axios";
import CustomAxiosRequestConfig from "./types/interfaces/CustomAxiosRequestConfig";
import { API_TOKEN_KEY } from "./store/AuthStore";
import { NoTokenError } from "./errors/NoTokenError";

const apiHandler = axios.create({
  baseURL: "https://api.iuis.university/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Adjust the interceptor to match AxiosRequestConfig
const configInterceptor = (config: InternalAxiosRequestConfig): any => {
  // Cast to CustomAxiosRequestConfig
  const customConfig = config as CustomAxiosRequestConfig;
  const isAuthRequired = customConfig.authRequired !== false;

  if (isAuthRequired) {
    const token = localStorage.getItem(API_TOKEN_KEY);

    if (!token) {
      return Promise.reject(new NoTokenError());
    }

    // Add the token to the headers
    customConfig.headers = {
      ...customConfig.headers, // Preserve existing headers
      Authorization: `Bearer ${token}`,
    };
  }

  return customConfig; // Return the modified config
};

// Attach the interceptor
apiHandler.interceptors.request.use(configInterceptor, (error) =>
  Promise.reject(error)
);

export default apiHandler;
