import { AxiosRequestConfig } from "axios";

export default interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  authRequired?: boolean;
}

export const config: CustomAxiosRequestConfig = {
  authRequired: true,
};
