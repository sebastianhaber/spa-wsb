import { ArrowPathIcon } from '@heroicons/react/20/solid';
import { useQuery } from 'react-query';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { getAllOffers } from '../api/api.offers';
import ClearFiltersButton from '../components/filterOffers/ClearFiltersButton';
import OfferListItem from '../components/offers/OfferListItem';
import OffersWrapper from '../components/offers/OffersWrapper';

const OffersPage = () => {
  const [searchParams] = useSearchParams();
  const searchApiParams = createSearchParams(searchParams).toString();
  const searchQuery = searchParams.get('q') || '';

  const {
    data: offers,
    isLoading,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ['offers', searchApiParams],
    queryFn: () => getAllOffers(searchApiParams),
    refetchOnWindowFocus: false,
  });

  // wiem jak to wyglada xdd ale działa
  if (isLoading || (isFetching && searchQuery) || (isFetching && searchApiParams)) {
    return (
      <OffersWrapper offers={[]} searchQuery={searchQuery}>
        {isLoading && !searchQuery && (
          <div className="flex">
            <ArrowPathIcon className="icon animate-spin" />
            <p>Loading</p>
          </div>
        )}
        {isFetching && searchQuery && (
          <div className="flex">
            <ArrowPathIcon className="icon animate-spin" />
            <p>Finding offers with "{searchQuery}"</p>
          </div>
        )}
        {!isLoading && isFetching && searchApiParams && (
          <div className="flex">
            <ArrowPathIcon className="icon animate-spin" />
            <p>Finding offers</p>
          </div>
        )}
      </OffersWrapper>
    );
  }
  return (
    <OffersWrapper offers={offers || []} searchQuery={searchQuery}>
      {searchApiParams && !offers?.length && !isFetching && (
        <div>
          <p>Empty results</p>
          <ClearFiltersButton />
        </div>
      )}
      {searchQuery && !offers?.length && !isFetching && <p>Can't find offers with "{searchQuery}"</p>}
      {isError && 'An error has occured.'}

      <OffersList>{offers?.map((offer) => <OfferListItem offer={offer} key={offer.id} />)}</OffersList>
    </OffersWrapper>
  );
};

export default OffersPage;

const OffersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  list-style: none;

  width: 100%;
`;
