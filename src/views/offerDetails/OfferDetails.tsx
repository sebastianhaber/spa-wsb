import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getOffer } from '../../api/api.offers';
import { theme } from '../../helpers/themes';

const OfferDetails = () => {
  const { id } = useParams();

  const {
    data: offer,
    isLoading,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ['offer', id],
    queryFn: () => (id ? getOffer(+id) : undefined),
    refetchOnWindowFocus: false,
  });
  console.log(offer);
  if (isLoading || !offer) {
    return <p>Ładowanie</p>;
  }
  return (
    <StyledOffers>
      <Title>{offer.title}</Title>
      <FullSizeInfo className="row">
        <li>
          <DocumentTextIcon className="icon" />
          Contract mode: {offer.mode}
        </li>
        <li>
          <CurrencyDollarIcon className="icon" />
          Salary: {offer.salary.from} to {offer.salary.to}
        </li>
        <li>
          <BriefcaseIcon className="icon" />
          Type: {offer.type}
        </li>
        <li>
          <ClockIcon className="icon" />
          Work Time: {offer.workTime}
        </li>
        <li>
          <ChartBarIcon className="icon" />
          Position: {offer.level}
        </li>
        <li>
          <ClockIcon className="icon" />
          Valid Until: {new Date(offer.validUntil || '').toLocaleDateString('pl')}
        </li>
        <li>
          <MapPinIcon className="icon" />
          {offer.comapnyCity}
        </li>
        <li>
          <BuildingOffice2Icon className="icon" />
          {offer.companyName}
        </li>
      </FullSizeInfo>
      <FullSizeInfo>
        Description: <br />
        {offer.description}
      </FullSizeInfo>
      <FullSizeInfo>
        You will be responsible for: <br />
        {offer.responsibilities}
      </FullSizeInfo>
      <FullSizeInfo>
        You are a perfect match, if: <br />
        {offer.requirements}
      </FullSizeInfo>
      <FullSizeInfo>
        What we offer: <br />
        {offer.whatWeOffer}
      </FullSizeInfo>
      <FullSizeInfo>
        <h2>Click bellow to send your application.</h2>
        <input type="file" />
      </FullSizeInfo>
    </StyledOffers>
  );
};

export default OfferDetails;

const StyledOffers = styled.div``;
const FullSizeInfo = styled.div`
  border-color: ${theme.colors.accent};
  background-color: white;
  margin: 10px auto;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1000px;
  min-width: 500px;
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeight.normal};

  &.row {
    flex-direction: row;
  }
  li {
    width: 50%;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
const Title = styled.div`
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  min-width: 500px;
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.colors.primary};
`;
