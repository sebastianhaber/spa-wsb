import styled from 'styled-components';
import AddOfferForm from './AddOfferForm';
import { theme } from '../../helpers/themes';

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
  margin-bottom: 50px;
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
  padding-block: 50px;
  background-color: ${theme.colors.textWhite};
  border-radius: 10px;
`;


