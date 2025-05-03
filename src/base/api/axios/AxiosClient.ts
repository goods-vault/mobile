import axios, { AxiosRequestConfig } from "axios";

export default class AxiosClient {
    api;

    constructor(config?: AxiosRequestConfig) {
        this.api = axios.create(config);
        this.api.defaults.baseURL = this.getDefaultBaseUrl();
    }

    getDefaultBaseUrl = () => {
        return "http://10.0.2.2:8000/api/";  // работает на эмуляторе
    };

    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.api.get<T>(url, config);
        return response.data;
    }

    post = <T extends {}>(config: any) => {
        return this.api.post<T>(config.url, config.data, config.config);
    };

    put = <T extends {}>(config: any) => {
        return this.api.put<T>(config.url, config.data, config.config);
    };

    delete = <T extends {}>(config: any) => {
        return this.api.delete<T>(config.url, config.config);
    };
};
