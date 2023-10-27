import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { FormEvent, useLayoutEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../helpers/themes';
import { IconButton } from '../styledButton';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!inputRef.current) return;

    const value = inputRef.current.value.trim();
    if (value.length) searchParams.set('q', value);
    else searchParams.delete('q');
    setSearchParams(searchParams);
  };

  useLayoutEffect(() => {
    if (inputRef.current) inputRef.current.value = searchParams.get('q') || '';
  }, []);

  return (
    <StyledSearchWrapper onSubmit={handleSearch}>
      <StyledInput id="search-offers" type="search" ref={inputRef} autoComplete="off" placeholder="Search offers..." />
      <IconButton title="Search" type="submit">
        <MagnifyingGlassIcon className="icon" />
      </IconButton>
    </StyledSearchWrapper>
  );
};

const StyledSearchWrapper = styled.form`
  display: flex;
  flex-wrap: nowrap;
  button {
    border-radius: 0 ${theme.radius.thirdRadius} ${theme.radius.thirdRadius} 0;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.textWhite};
    border: 0;
  }
`;
const StyledInput = styled.input`
  padding: 0;
  background-color: ${theme.colors.white};
  padding: 0.5rem 1rem;
  height: 2.25rem;

  border-radius: ${theme.radius.thirdRadius} 0 0 ${theme.radius.thirdRadius};
  box-shadow: inset 0 0 1px transparent;
  border: 0;

  max-width: 300px;
  width: 100%;

  outline: none;

  &:hover {
    box-shadow: inset 0 0 1px ${theme.colors.primary};
  }
  &:focus-visible {
    box-shadow: inset 0 0 1px ${theme.colors.primary};
  }
`;

export default SearchBar;
