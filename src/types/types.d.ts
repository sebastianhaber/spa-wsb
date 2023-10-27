export type Offer = {
  id: number;
  title: string;
  description: string;
  company: Company;
  type: 'contract of employment' | 'B2B'; // uzupełnić
  workTime: 'part-time' | 'full-time';
  mode: 'in office' | 'hybrid' | 'remote';
  salary: {
    from: number;
    to: number;
  };
  // contract: {
  // position: {
  //     name: string;
  //   };
    // recruitmentType: 'remote' | 'in office';
  // };
  level: 'assistant' | 'junior' | 'mid' | 'senior';
  validUntil: string; // ważność oferty
  responsibilities: string;
  requirements: string;
  whatWeOffer: string;
};

type Company = {
  id: number;
  city: string;
  name: string;
  description: string;
};
