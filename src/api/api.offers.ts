import axiosInstance from '../lib/axios';
import { GetAllOffersResponse } from '../services/getOffers/types';

export const getAllOffers = (search?: string) =>
  axiosInstance.get<GetAllOffersResponse[]>(`/offers${search ? `?${search}` : ''}`).then((res) => res.data);
