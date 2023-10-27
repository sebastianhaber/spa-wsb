import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { size, theme } from '../helpers/themes';

const Home = () => {
  return (
    <StyledHomeWrapper>
      <div className="content">
        <div className="left">
          <h1>Find your favorite job and immidiate</h1>
          <p>Search your dream job while on the go with the best job search platform available.</p>
          <Link to={'/offers'}>
            Check all offers
            <ChevronRightIcon className="icon" />
          </Link>
        </div>
        <div className="right">
          <img
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="two-women-talking-while-looking-at-laptop-computer"
          />
        </div>
      </div>

      <div className="svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={theme.colors.primary}
            fill-opacity="1"
            d="M0,32L48,26.7C96,21,192,11,288,26.7C384,43,480,85,576,133.3C672,181,768,235,864,256C960,277,1056,267,1152,229.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </StyledHomeWrapper>
  );
};
const StyledHomeWrapper = styled.section`
  .content {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    margin: 1rem;

    background-color: ${theme.colors.background + '80'};
    backdrop-filter: blur(1rem);
    border-radius: ${theme.radius.mainRadius};

    padding: 5rem;
    max-width: 600px;
    min-width: 400px;
    width: 100%;
    h1 {
      font-size: 2rem;
      line-height: 1.2;
    }
    p {
      color: ${theme.colors.primary};
    }
    a {
      height: 2.25rem;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.textWhite};
      border-radius: ${theme.radius.mainRadius};
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      .icon {
        margin-left: 0.5rem;
      }
    }
  }
  .right {
    flex: 1;
    display: grid;
    place-content: center;
    margin-right: 2rem;
    img {
      width: 500px;
      display: block;
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% !important;
      transition: width 0.2s ease;
    }
    @media screen and (max-width: ${size.laptop}) {
      img {
        width: 300px;
      }
    }
  }
  .svg {
    position: fixed;
    top: 0;
    right: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: end;
  }
`;
export default Home;
