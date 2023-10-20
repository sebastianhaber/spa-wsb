import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { theme as _theme } from '../../helpers/themes';

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  height: `38px`,
  color: `${_theme.colors.textBlack}`,
  borderRadius: `6px`,
  backgroundColor: `${_theme.colors.secondary}`,
  fontWeight: `500`,
  fontFamily: `Poppins`,
  textTransform: 'none',
  fontSize: '16px',
  transition: 'all 0.2s ease-in-out',

  ':disabled': {
    backgroundColor: `grey`,
    color: `${_theme.colors.textBlack}`,
  },
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));
