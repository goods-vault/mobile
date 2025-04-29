import axios, { AxiosRequestConfig } from "axios";

export default class AxiosClient {
  api;

  constructor(config?: AxiosRequestConfig) {
    this.api = axios.create(config);
    this.api.defaults.baseURL = this.getDefaultBaseUrl();
    this.api.defaults.headers.common["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
  }

  getDefaultBaseUrl = () => {
    return "https://gepir.gs1ru.org/GEPIR40/getItem";
  };

  get = <T extends {}>(config: any) => {
    return this.api.get<T>(config.url, config.config);
  };

  post = <T extends {}>(config: any) => {
    return this.api.post<T>(config.url, config.data, config.config);
  };

  put = <T extends {}>(config: any) => {
    return this.api.put<T>(config.url, config.data, config.config);
  };

  delete = <T extends {}>(config: any) => {
    return this.api.delete<T>(config.url, config.config);
  };
}
