import { ArrowRightIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ChangeEvent, FormEvent, useCallback, useRef, useState } from 'react';
import { ParamKeyValuePair, createSearchParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { size, theme } from '../../helpers/themes';
import { IconButton, StyledButton } from '../styledButton';

const FilterOffersMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilters = useRef<ParamKeyValuePair[]>([]);
  const [isMenuVisible, setMenuVisible] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name.split('=');
    const pair: ParamKeyValuePair = [name[0] || '', name[1] || ''];
    const value = e.target.value === 'on';

    if (value && !activeFilters.current.find((el) => el[1] === pair[1])) {
      activeFilters.current = [...activeFilters.current, pair];
    } else {
      activeFilters.current = activeFilters.current.filter((el) => el[1] !== pair[1]);
    }
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    activeFilters.current = activeFilters.current.filter((el) => el[1]);

    const connectedArray = [...new Set(activeFilters.current)];
    const newSearchParams = createSearchParams(connectedArray).toString();
    setSearchParams(newSearchParams);
  };
  const getDefaultChecked = useCallback(
    (name: string) => {
      const filters: ParamKeyValuePair[] = [];
      const splittedName = name.split('=');
      const isChecked = searchParams.get(splittedName[0]) === splittedName[1];

      if (!isChecked || splittedName.length !== 2) return undefined;
      if (isChecked) filters.push([splittedName[0], splittedName[1] || '']);

      activeFilters.current = filters;

      return isChecked;
    },
    [searchParams],
  );

  return (
    <StyledSection>
      <div className={'toggle-menu'}>
        <IconButton onClick={() => setMenuVisible((prev) => !prev)}>
          {isMenuVisible ? <XMarkIcon className="icon" /> : <ArrowRightIcon className="icon" />}
        </IconButton>
      </div>
      <StyledWrapper onSubmit={onSubmit} className={isMenuVisible ? 'active' : ''}>
        <ul className="content">
          <li>
            <h3>Work Time</h3>
            <label htmlFor="filter-workTime-fulltime">
              <input
                type="checkbox"
                id="filter-workTime-fulltime"
                name="contract.workTime=full-time"
                onChange={handleChange}
                defaultChecked={getDefaultChecked('contract.workTime=full-time')}
              />
              <p>Full time</p>
            </label>
            <label htmlFor="filter-workTime-parttime">
              <input
                type="checkbox"
                id="filter-workTime-parttime"
                name="contract.workTime=part-time"
                onChange={handleChange}
                defaultChecked={getDefaultChecked('contract.workTime=part-time')}
              />
              <p>part time</p>
            </label>
          </li>
          <li>
            <h3>Mode</h3>
            <label htmlFor="filter-mode-hybrid">
              <input
                type="checkbox"
                id="filter-mode-hybrid"
                name="contract.mode=hybrid"
                onChange={handleChange}
                defaultChecked={getDefaultChecked('contract.mode=hybrid')}
              />
              <p>hybrid</p>
            </label>
            <label htmlFor="filter-mode-home_office">
              <input
                type="checkbox"
                id="filter-mode-home_office"
                name="contract.mode=home office"
                onChange={handleChange}
                defaultChecked={getDefaultChecked('contract.mode=home office')}
              />
              <p>home office</p>
            </label>
            <label htmlFor="filter-mode-remote">
              <input
                type="checkbox"
                id="filter-mode-remote"
                name="contract.mode=remote"
                onChange={handleChange}
                defaultChecked={getDefaultChecked('contract.mode=remote')}
              />
              <p>remote</p>
            </label>
          </li>
          <li>
            <h3>Contract Type</h3>
            <label htmlFor="filter-type-contract_of_employment">
              <input
                type="checkbox"
                id="filter-type-contract_of_employment"
                name="contract.type=contract of employment"
                onChange={handleChange}
                defaultChecked={getDefaultChecked('contract.type=contract of employment')}
              />
              <p>contract of employment</p>
            </label>
          </li>
        </ul>

        <footer>
          <StyledButton className="btn-submit" type="submit">
            <MagnifyingGlassIcon className="icon" />
            Find offers
          </StyledButton>
        </footer>
      </StyledWrapper>
    </StyledSection>
  );
};
const StyledSection = styled.section`
  .toggle-menu {
    @media screen and (min-width: ${size.laptop}) {
      display: none;
    }
  }
`;
const StyledWrapper = styled.form`
  position: sticky;
  top: 4rem;
  padding: 1rem;

  width: 300px;
  height: calc(100vh - 4rem);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${theme.colors.background};

  @media screen and (max-width: ${size.laptop}) {
    position: absolute;
    left: 0;
    z-index: 10;
    transform: translateX(-100%);
    transition: transform 0.2s ease;

    &.active {
      transform: translateX(0);
    }
  }

  input,
  label {
    cursor: pointer;
  }
  label {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    height: 2rem;
    padding: 0.5rem;
    transition: background-color 0.2s ease;

    border-radius: ${theme.radius.thirdRadius};

    &:hover {
      background-color: ${theme.colors.primary + '10'};
    }
  }

  .content {
    list-style: none;
    li {
      border-bottom: 1px solid ${theme.colors.secondary};
      padding: 1rem 0;
    }
  }
  footer {
    position: sticky;
    bottom: 1rem;
  }
  .btn-submit {
    width: 100%;
    .icon {
      margin-right: 0.5rem;
    }
  }
`;

export default FilterOffersMenu;
