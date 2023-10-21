import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../helpers/themes';
import useOuterClick from '../../hooks/useOuterClick';
import { StyledButton } from '../styledButton';
import ToggledList, { TListElement } from '../toggledList/ToggledList';

export enum ESortBy {
  createdAt = 'createdAt',
  validUntil = 'validUntil',
  position = 'position',
}

export const getSortedByProperty = (searchParams: URLSearchParams) => {
  const param = searchParams.get('_sort');

  if (!param) return undefined;
  return param in ESortBy ? param : undefined;
};

const listElements: TListElement[] = [
  {
    label: 'Created At',
    value: 'createdAt',
  },
  {
    label: 'Offer valid until',
    value: 'validUntil',
  },
];

const SortOffers = () => {
  const [isListOpen, setListOpen] = useState<boolean>(false);
  const innerRef = useOuterClick(() => setListOpen(false));
  const [searchParams, setSearchParams] = useSearchParams();

  const sortedBy = getSortedByProperty(searchParams);

  const handleSetSort = (property: string) => {
    if (property === sortedBy) searchParams.delete('_sort');
    else searchParams.set('_sort', property);

    setSearchParams(searchParams);
    setListOpen(false);
  };

  return (
    <StyledWrapper ref={innerRef}>
      <StyledButton onClick={() => setListOpen((prev) => !prev)} className="btn-sort-by" data-is-sorting={!!sortedBy}>
        <span>Sort by</span>
        <ChevronUpDownIcon className={'icon'} />
      </StyledButton>

      <ToggledList
        isOpen={isListOpen}
        isItemActive={(value) => sortedBy === value}
        items={listElements}
        onItemClick={(item) => handleSetSort(item.value)}
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;

  .btn-sort-by {
    display: flex;
    gap: 0.5rem;
    &[data-is-sorting='true'] {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.textWhite};
    }
  }
`;

export default SortOffers;
