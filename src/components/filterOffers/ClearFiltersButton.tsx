import { useSearchParams } from 'react-router-dom';
import { StyledButton } from '../styledButton';

const ClearFiltersButton = () => {
  const [_searchParams, setSearchParams] = useSearchParams();
  const handleClear = () => {
    setSearchParams();
  };
  return <StyledButton onClick={handleClear}>Clear filters</StyledButton>;
};

export default ClearFiltersButton;
