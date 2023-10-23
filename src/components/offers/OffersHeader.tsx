import styled from 'styled-components';
import { theme } from '../../helpers/themes';
import { GetAllOffersResponse } from '../../services/getOffers/types';
import SearchBar from '../searchBar/SearchBar';
import SortOffers from './SortOffers';

type Props = {
  offers: GetAllOffersResponse[];
  searchQuery: string;
};

const OffersHeader = ({ offers, searchQuery }: Props) => {
  return (
    <StyledOffersHeader>
      {searchQuery && (
        <p>
          {offers?.length} {offers?.length !== 1 ? 'results' : 'result'}
        </p>
      )}

      <SearchBar />
      <div className="flex">
        <SortOffers />
      </div>
    </StyledOffersHeader>
  );
};

const StyledOffersHeader = styled.section`
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 1rem 0;
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.colors.accent};
`;

export default OffersHeader;
