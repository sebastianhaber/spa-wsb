export type Offer = {
  id: number;
  title: string;
  description: string;
  company: Company;
  contract: {
    type: 'contract of employment' | 'B2B'; // uzupełnić
    workTime: 'part-time' | 'full-time';
    mode: 'in office' | 'hybrid' | 'remote';
    salary: {
      from: number;
      to: number;
    };
    position: {
      name: string;
      level: 'assistant' | 'junior' | 'mid' | 'senior';
    };
    recruitmentType: 'remote' | 'in office';
  };
  validUntil: string; // ważność oferty
  responsibilities: string[];
  requirements: string[];
  whatWeOffer: string[];
};
type Company = {
  id: number;
  city: string;
  name: string;
  description: string;
};
