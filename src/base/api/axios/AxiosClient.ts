import axios, { AxiosRequestConfig } from "axios";

export default class AxiosClient {
  api;

  constructor(config?: AxiosRequestConfig) {
    this.api = axios.create(config);
    this.api.defaults.baseURL = this.getDefaultBaseUrl();
  }

  getDefaultBaseUrl = () => {
    return "https://gazelle-destined-shiner.ngrok-free.app/api";
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
