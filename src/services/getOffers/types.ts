export type GetAllOffersResponse = {
  id: number;
  title: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  validUntil: string;
  whatWeOffer: string[];
  company: Company;
  contract: Contract;
  createdAt: string;
};

export type Company = {
  id: number;
  name: string;
  city: string;
  description: string;
};

export type Contract = {
  type: string; // uzupełnić
  workTime: string;
  mode: string;
  salary: {
    from: number;
    to: number;
  };
  position: {
    name: string;
    level: string;
  };
  recruitmentType: string;
};
