import { getAxiosClient } from "../axiosClient";
import { AddOfferRequest } from "./types";

const axiosClient = getAxiosClient();
export const addOffer = async (body: AddOfferRequest) => {
  const url = `/offers`;
  return (await axiosClient.ax.post(url, body));
};
