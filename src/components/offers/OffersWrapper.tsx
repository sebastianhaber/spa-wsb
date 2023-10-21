import { ReactNode } from 'react';
import styled from 'styled-components';
import { GetAllOffersResponse } from '../../services/getOffers/types';
import FilterOffersMenu from '../filterOffers/FilterOffersMenu';
import OffersHeader from './OffersHeader';

type Props = {
  offers: GetAllOffersResponse[];
  children: ReactNode;
  searchQuery: string;
};

const OffersWrapper = ({ offers, children, searchQuery }: Props) => {
  return (
    <RootContainer>
      <FilterOffersMenu />
      <div id="offers">
        <OffersHeader offers={offers || []} searchQuery={searchQuery} />

        {children}
      </div>
    </RootContainer>
  );
};
const RootContainer = styled.div`
  display: flex;
  position: relative;

  #offers {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem 2rem;
  }
  .flex {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;
export default OffersWrapper;
