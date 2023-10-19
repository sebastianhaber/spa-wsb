import styled from 'styled-components';
import AddOfferForm from './AddOfferForm';

const AddOffer = () => {
  return (
    <AddOfferRootContainer>
      <AddOfferWrapper>
        <AddOfferHeader>Add Offer</AddOfferHeader>
        <AddOfferContainer>
          <AddOfferForm />
        </AddOfferContainer>
      </AddOfferWrapper>
    </AddOfferRootContainer>
  );
};

export default AddOffer;

const AddOfferRootContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AddOfferWrapper = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
`;

const AddOfferHeader = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 2rem 0;
`;

const AddOfferContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;


