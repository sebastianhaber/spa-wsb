import styled from 'styled-components';
import { theme } from '../../helpers/themes';

export const StyledOffers = styled.div`
  color: black;
  font-size: 23px;
  .Respo {
    border-color: gray;
    background-color: white;
    margin: 10px 10px;
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
    min-width: 500px;
    font-weight: ${theme.fontWeight.normal};
    color: ${theme.colors.primary};
  }

  .Requirements {
    border-color: gray;
    background-color: white;
    margin: 10px 10px;
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
    min-width: 500px;
    color: ${theme.colors.primary};
    font-weight: ${theme.fontWeight.normal};
  }

  .CompanyName {
    font-size: 36px;
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
  }

  .WhatWeOffer {
    border-color: gray;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    max-width: 1000px;
    min-width: 500px;
    font-weight: ${theme.fontWeight.normal};
    color: ${theme.colors.primary};
  }
  .InfoAbout {
    border-color: gray;
    background-color: white;
    border-radius: 15px;
    flex-wrap: wrap;
    padding: 10px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
    min-width: 500px;
    font-weight: ${theme.fontWeight.normal};
    color: ${theme.colors.primary};
  }
  .InfoAbout ol,
  li {
    width: 50%;
    list-style: none;
    display: flex;
    align-items: center;
  }
  .dates {
    color: grey;
    opacity: 50%;
    width: 100%;
  }
  .InfoAbout svg {
    height: 23px;
    width: 23px;
    margin-top: 5px;
    margin-right: 0.5rem;
  }
  .ResponsibilitiesIcon {
    height: 23px;
    width: 23px;
    margin-right: 0.5rem;
  }
  .RequirementsIcon {
    height: 23px;
    width: 23px;
    margin-right: 0.5rem;
    color: ${theme.colors.textBlack};
  }
  .WhatWeOfferIcon {
    height: 23px;
    width: 23px;
    margin-right: 0.5rem;
  }

  .CV {
    border-color: gray;
    background-color: white;
    margin: 10px 10px;
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
    min-width: 500px;
    font-weight: ${theme.fontWeight.normal};
    color: ${theme.colors.primary};
  }
`;
