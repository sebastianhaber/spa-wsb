import { CheckIcon } from '@heroicons/react/20/solid';
import styled from 'styled-components';
import { size, theme } from '../../helpers/themes';

export type TListElement = {
  label: string;
  value: string;
};

type Props = {
  isOpen: boolean;
  items: TListElement[];
  onItemClick: (item: TListElement) => void;
  isItemActive: (value: string) => boolean;
};
const ToggledList = ({ isOpen, items, onItemClick, isItemActive }: Props) => {
  if (!isOpen) return null;
  return (
    <StyledList>
      {items.map((el, index) => (
        <li key={index}>
          <StyledListButton onClick={() => onItemClick(el)}>
            {el.label}
            <span>{isItemActive(el.value) && <CheckIcon className="icon" />}</span>
          </StyledListButton>
        </li>
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul`
  width: fit-content;

  list-style: none;

  position: absolute;
  top: calc(100% + 0.25rem);
  right: 0;
  z-index: 1;

  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.secondary};
  border-radius: ${theme.radius.thirdRadius};
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);

  overflow: hidden;

  @media screen and (min-width: ${size.laptop}) {
    right: 50%;
    transform: translateX(50%);
  }
`;
const StyledListButton = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;

  height: 2.25rem;
  border: 0;
  background-color: transparent;
  border-radius: 0;
  width: 100%;
  text-align: left;

  padding: 0 1rem;

  transition: all 0.2s ease;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.background};
  }

  span {
    width: 1rem;
  }
`;

export default ToggledList;
