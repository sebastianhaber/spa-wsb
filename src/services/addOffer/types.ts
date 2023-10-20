export type AddOfferRequest = {

  title: string;
  description: string;
  requirements: string;
  responsibilities: string;
  validUntil: string | Date;
  whatWeOffer: string;
  company: {

    city: string;
    description: string;
    name: string;
  };
  contract: {
    mode: string;
    salary: {
      from: number;
      to: number;
    };
    // type: string;
    // workTime: string;
    // position: {
    //   level: 'assistant';
    //   name: '???';
    // };
    // recruitmentType: 'remote';
  };
};
