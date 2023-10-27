export type GetAllOffersResponse = {
  id: number;
  title: string;
  description: string;
  requirements: string;
  responsibilities: string;
  validUntil: string | Date | null;
  whatWeOffer: string;
  comapnyCity: string;
  companyDescription: string;
  companyName: string;
  mode: string; //'in office' | 'hybrid' | 'remote'
  salary: {
    from: number;
    to: number;
  };
  type: string; //'contract of employment' | 'B2B'
  workTime: string; //'part-time' | 'full-time'
  level: string; //'assistant' | 'junior' | 'mid' | 'senior'
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
