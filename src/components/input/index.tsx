import { alpha, styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { theme as _theme } from '../../helpers/themes';
import { OutlinedInputProps } from '@mui/material';

export const Input = styled((props: TextFieldProps) => (
  <TextField InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>} {...props} />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    // "font-size": "14px",//<<<TODO
    color: `${_theme.colors.textBlack}`,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    transition: theme.transitions.create([]),
    '&:hover': {
      backgroundColor: `${_theme.colors.white}`,
    },
    '&.Mui-focused': {
      backgroundColor: `${_theme.colors.white}`,
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: `${_theme.colors.primary}`,
    },
  },
  '& .MuiFormLabel-root': {
    '&.Mui-focused': {
      color: `${_theme.colors.accent}`,
    },
  },
  '& .Mui-error': {
    color: `${_theme.colors.red}`,
    // "font-size": "12px",//<<<TODO
  },
}));
