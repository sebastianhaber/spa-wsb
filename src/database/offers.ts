import { Offer } from '../types/types';

export const offers: Offer[] = [
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
];
