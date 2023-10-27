import { StarIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../helpers/themes';
import firstLetterUppercase from '../../lib/firstLetterUppercase';
import { GetAllOffersResponse } from '../../services/getOffers/types';
import { IconButton } from '../styledButton';

const getFavouriteItems = (lsData: string | null) => {
  if (typeof lsData === 'undefined' || !lsData) {
    return [];
  }
  if (!lsData.startsWith('[')) {
    return [];
  }
  const favouriteItems: TFavouriteItems = JSON.parse(lsData);
  if (favouriteItems.length && typeof favouriteItems[0] === 'number') {
    return favouriteItems;
  }
  return [];
};
const handleCheckIsItemFavourite = (id: number, lsData: string | null) => {
  const items = getFavouriteItems(lsData || '');
  if (!items.length) {
    return false;
  }
  return items.find((itemId) => itemId === id) ? true : false;
};

type TFavouriteItems = number[];
type Props = {
  offer: GetAllOffersResponse;
};
const OfferListItem = ({ offer }: Props) => {
  const [isFavourite, setFavourite] = useState<boolean>(false);

  const handleToggleFavourite = () => {
    const lsData = localStorage.getItem('favourite');
    const items = getFavouriteItems(lsData);
    let newItems: TFavouriteItems = [];

    // Empty array
    if (!items.length) {
      newItems = [offer.id];
    }

    // Offer is saved in localStorage
    if (items.find((id) => id === offer.id)) {
      newItems = items.filter((id) => id !== offer.id);
    } else {
      newItems = [...items, offer.id];
    }

    // Set everything
    localStorage.setItem('favourite', JSON.stringify(newItems));
    setFavourite((prev) => !prev);
  };
  const initToggleFavourite = () => {
    const lsData = localStorage.getItem('favourite');
    const isFavourite = handleCheckIsItemFavourite(offer.id, lsData);
    setFavourite(isFavourite);
  };

  useEffect(() => {
    initToggleFavourite();
  }, []);

  return (
    <StyledListItem>
      <StyledOfferLink to={`${offer.id}`} className="offer-link"></StyledOfferLink>
      <p className="valid-until">Offer valid until: {new Date(offer.validUntil || '').toLocaleDateString('pl')}</p>
      <div className="top-info">
        <h3>{offer.title}</h3>
        <IconButton onClick={handleToggleFavourite}>
          <StarIcon className={isFavourite ? 'icon filled' : 'icon'} />
        </IconButton>
      </div>
      <span className="salary">
        {offer.salary.from === offer.salary.to ? (
          `Up to ${offer.salary.from} PLN gross / month`
        ) : (
          <>
            {offer.salary.from} PLN - {offer.salary.to} PLN gross / month
          </>
        )}
      </span>
      <Link to={`/company/${offer.companyName}`} className="company">
        {offer.companyName}
      </Link>
      <div className="job-info">
        <span>{firstLetterUppercase(offer.level)}</span>
        <span>•</span>
        <span>{firstLetterUppercase(offer.mode)}</span>
        <span>•</span>
        <span>{firstLetterUppercase(offer.workTime)}</span>
        <span>•</span>
        <span>{firstLetterUppercase(offer.type)}</span>
      </div>
    </StyledListItem>
  );
};
const StyledListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 1rem;
  border-radius: ${theme.radius.thirdRadius};
  width: 100%;
  border: 1px solid ${theme.colors.secondary};
  color: ${theme.colors.accent};
  background-color: ${theme.colors.white};
  transition: background-color 0.3s ease;
  overflow: hidden;

  .top-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    color: ${theme.colors.primary};
    font-size: ${theme.fontSize.big};
  }
  .valid-until {
    font-size: ${theme.fontSize.small};
  }

  a.company {
    color: ${theme.colors.primary};
    width: fit-content;
    z-index: 1;
    transition: color 0.3s ease;
    &:hover {
      color: ${theme.colors.accent};
    }
  }

  .job-info {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    font-size: ${theme.fontSize.small};
  }
  .salary {
    font-weight: ${theme.fontWeight.big};
    color: ${theme.colors.accent};
  }
`;
const StyledOfferLink = styled(Link)`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default OfferListItem;
