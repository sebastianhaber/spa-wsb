export type AddOfferRequest = {
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
