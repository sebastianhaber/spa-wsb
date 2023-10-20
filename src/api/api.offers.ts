import axiosInstance from '../lib/axios';
import { GetAllOffersResponse } from '../services/getOffers/types';

export const getAllOffers = () => axiosInstance.get<GetAllOffersResponse[]>('/offers').then((res) => res.data);
