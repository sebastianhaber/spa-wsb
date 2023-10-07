// import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { StyledLink, StyledNavigation } from './Navigation.styled';
// import MenuIcon from '@mui/icons-material/Menu';
// import AdbIcon from '@mui/icons-material/Adb';

const pages = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/offers',
    label: 'Offers',
  },
];

const Navigation = () => {
  return (
    <StyledNavigation>
      {pages.map((page) => (
        <StyledLink to={page.url} key={page.url}>
          {page.label}
        </StyledLink>
      ))}
    </StyledNavigation>
  );
  // return (
  //   <AppBar position="static">
  //     <Container maxWidth="xl">
  //       <Toolbar disableGutters>
  //         <Link to={'/'}>LOGO</Link>
  //         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
  //           {pages.map((page) => (
  //             <NavLink key={page.url} to={page.url}>
  //               {page.label}
  //             </NavLink>
  //           ))}
  //         </Box>
  //       </Toolbar>
  //     </Container>
  //   </AppBar>
  // );
};

export default Navigation;
