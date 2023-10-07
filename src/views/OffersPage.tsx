import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { getAllOffers } from '../api/api.offers';
import { GetAllOffersResponse } from '../services/getOffers/types';
import styled from 'styled-components';

const OffersPage = () => {
  const [offers, setOffers] = useState<GetAllOffersResponse[]>([]);

  const GetAllOffersMutation = useMutation(getAllOffers, {
    onSuccess: (data: any) => {
      //TODO modele zamiast typów
      console.log(data.data);
      setOffers(data.data);
    },
  });

  useEffect(() => {
    GetAllOffersMutation.mutate();
  }, []);

  return (
    <RootContainer>
      <OffersTitle>Offers</OffersTitle>

      {offers.map((offer) => (

        <div key={offer.id}>
          <h1>{offer.title}</h1>
          <p>{offer.description}</p>
        </div>
      ))}
    </RootContainer>
  );
};

export default OffersPage;

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OffersTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;