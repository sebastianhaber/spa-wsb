import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { setupInterceptorsTo } from "./setupInterceptors";

type ApiConfig = {
  axios?: AxiosRequestConfig;
};

export class AxiosService {
  public ax: AxiosInstance;

  constructor(config: ApiConfig) {
    const axiosOptions: AxiosRequestConfig = {
      timeout: 65000,
    };

    const axiosInstance = setupInterceptorsTo(
      axios.create({
        ...axiosOptions,
        ...config.axios,
      })
    );

    this.ax = axiosInstance;

    return this;
  }
}

export default AxiosService;
