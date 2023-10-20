import { StyledLink, StyledNavigation } from './Navigation.styled';

const pages = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/offers',
    label: 'Offers',
  },
  {
    url: '/add-offer',
    label: 'Add offer',
  },
];

const Navigation = () => {
  return (
    <StyledNavigation>
      {pages.map((page) => (
        <StyledLink to={page.url} key={page.url} className={({ isActive }) => (isActive ? 'active' : '')}>
          {page.label}
        </StyledLink>
      ))}
    </StyledNavigation>
  );
};

export default Navigation;
