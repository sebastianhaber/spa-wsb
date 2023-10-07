import { Link } from 'react-router-dom';
import { StyledNavigation } from './Navigation.styled';

const Navigation = () => {
  return (
    <StyledNavigation>
      <Link to={'/'}>Dashboard</Link>
      <Link to={'/offers'}>offers</Link>
      <Link to={'/addOffer'}>Add Offer</Link>
    </StyledNavigation>
  );
};

export default Navigation;
