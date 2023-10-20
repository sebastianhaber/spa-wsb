import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { getAxiosClient } from "./axiosClient";
import SessionService from "./sessionService";
// import { showError } from "./utils/error-handling";

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const user = SessionService.getUser();

  if (config && config.headers) {
    if (user) {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
    }
  }
  return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  if (error.response) {
    console.log(error.response);
  }
  return Promise.reject(error);
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  const axiosClient = getAxiosClient();
  const originalConfig: any = error.config;
  const user = SessionService.getUser();

  if (originalConfig.url !== "/Account/Login" && error.response) {
    if (error.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;

      try {
        await axiosClient.ax
          .post("/Account/RefreshToken", {
            accessToken: user.accessToken,
            refreshToken: user.refreshToken,
          })
          .then((response) => {
            if (response.data) {
              const payload = response.data.payload;
              const updatedUser = {
                accessTokenExpirationDate: payload.accessTokenExpirationDate,
                refreshTokenExpirationDate: payload.refreshTokenExpirationDate,
                accessToken: payload.accessToken,
                refreshToken: payload.refreshToken,
                roleUser: user.roleUser,
                userDetailsId: user.userDetailsId
              };
              SessionService.setUser(updatedUser);
              return axiosClient.ax(originalConfig);
            }
          });
      } catch (_error: any) {
        if (
          _error.config.url === "/Account/RefreshToken"
          //&&
          //_error.response.data.error_code === 11
        ) {
          SessionService.clearUserSession();
          window.location.href = "/login";
        }
        return Promise.reject(_error);
      }
    }
  }
  // if (error.response) {
  //   showError(error.response);
  // }
  return Promise.reject(error);
};

export const setupInterceptorsTo = (
  axiosInstance: AxiosInstance
): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);

  return axiosInstance;
};
