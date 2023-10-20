import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { getAllOffers } from '../api/api.offers';
import OfferListItem from '../components/offers/OfferListItem';
import { theme } from '../helpers/themes';

const OffersPage = () => {
  // Tu bedzie jakies sortowanie czy cos
  const [searchParams] = useSearchParams();

  // const {data:offers, mutate, isLoading,isError} = useMutation(getAllOffers, {
  //   onSuccess: (data: AxiosResponse<GetAllOffersResponse[], any>) => {
  //     //TODO modele zamiast typów
  //     setOffers(data.data);
  //   },
  // });
  const {
    data: offers,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ['offers'],
    queryFn: getAllOffers,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  return (
    <RootContainer>
      {offers && offers.length > 0 && (
        <OffersHeader>
          <p>We have {offers?.length} job offers!</p>
        </OffersHeader>
      )}
      {isFetching && !offers && 'Fetching offers...'}
      {isError && 'An error has occured.'}
      <OffersList>{offers?.map((offer) => <OfferListItem offer={offer} key={offer.id} />)}</OffersList>
    </RootContainer>
  );
};

export default OffersPage;

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${theme.maxView.offersList};
  margin: 0 auto;
  padding: 0 1rem;
  padding-bottom: 2rem;
`;

const OffersHeader = styled.section`
  font-weight: ${theme.fontWeight.normal};
  width: 100%;
  margin: 1rem 0;
  color: ${theme.colors.accent};
`;
const OffersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  list-style: none;

  width: 100%;
`;
