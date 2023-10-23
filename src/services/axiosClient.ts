import AxiosService from "./axiosService";

export const getAxiosClient = () => {
  return new AxiosService({
    axios: {
      baseURL: "http://localhost:3000/",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  });
};
