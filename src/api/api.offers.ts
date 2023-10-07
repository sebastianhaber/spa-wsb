import axiosInstance from '../lib/axios';
import { Offer } from '../types/types';

export const getAllOffers = () => axiosInstance.get<Offer[]>('/offers');
