
import { getAxiosClient } from "../axiosClient";
import { GetAllOffersResponse } from "./types";

const axiosClient = getAxiosClient();
export const getAllOffers = async () => {
  const url = `/offers`;
  return (await axiosClient.ax.get<GetAllOffersResponse[]>(url));
};
