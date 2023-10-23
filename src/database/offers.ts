import { GetAllOffersResponse } from '../services/getOffers/types';

export const offers: GetAllOffersResponse[] = [
  {
    id: 1,
    title: 'Tytuł oferty',
    description: 'opis ofertt',
    requirements: ['wymagania1', 'wymagania2'],
    responsibilities: ['odpowiedzialnosc1', 'odpowiedzialnosc2'],
    validUntil: '20-02-2020',
    whatWeOffer: ['nic nie oferujemy'],
    company: {
      id: 1,
      city: 'Gdańsk',
      description: 'opis',
      name: 'nazwa',
    },
    contract: {
      mode: 'hybrid',
      salary: {
        from: 10000,
        to: 12000,
      },
      type: 'contract of employment',
      workTime: 'full-time',
      position: {
        level: 'assistant',
        name: '???',
      },
      recruitmentType: 'remote',
    },
  },
  {
    id: 2,
    title: 'Tytuł oferty1',
    description: 'opis ofertt',
    requirements: ['wymagania1', 'wymagania2'],
    responsibilities: ['odpowiedzialnosc1', 'odpowiedzialnosc2'],
    validUntil: '20-02-2020',
    whatWeOffer: ['nic nie oferujemy'],
    company: {
      id: 1,
      city: 'Gdańsk',
      description: 'opis',
      name: 'nazwa',
    },
    contract: {
      mode: 'hybrid',
      salary: {
        from: 420,
        to: 2137,
      },
      type: 'contract of employment',
      workTime: 'full-time',
      position: {
        level: 'assistant',
        name: '???',
      },
      recruitmentType: 'remote',
    },
  },
  {
    id: 3,
    title: 'Tytuł oferty333',
    description: 'opis ofertt',
    requirements: ['wymagania1', 'wymagania2'],
    responsibilities: ['odpowiedzialnosc1', 'odpowiedzialnosc2'],
    validUntil: '20-02-2020',
    whatWeOffer: ['nic nie oferujemy'],
    company: {
      id: 1,
      city: 'Gdańsk',
      description: 'opis',
      name: 'nazwa',
    },
    contract: {
      mode: 'hybrid',
      salary: {
        from: 10000,
        to: 12000,
      },
      type: 'contract of employment',
      workTime: 'full-time',
      position: {
        level: 'assistant',
        name: '???',
      },
      recruitmentType: 'remote',
    },
  },
  {
    id: 4,
    title: 'Tytuł oferty444',
    description: 'opis ofertt',
    requirements: ['wymagania1', 'wymagania2'],
    responsibilities: ['odpowiedzialnosc1', 'odpowiedzialnosc2'],
    validUntil: '20-02-2020',
    whatWeOffer: ['nic nie oferujemy'],
    company: {
      id: 1,
      city: 'Gdańsk',
      description: 'opis',
      name: 'nazwa',
    },
    contract: {
      mode: 'hybrid',
      salary: {
        from: 10000,
        to: 12000,
      },
      type: 'contract of employment',
      workTime: 'full-time',
      position: {
        level: 'assistant',
        name: '???',
      },
      recruitmentType: 'remote',
    },
  },
];
