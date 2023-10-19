export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const theme = {
  colors: {
    white: '#ffffff',
    red: '#ff0000',
    textBlack: '#000000',
    textWhite: '#ffffff',
    cardBackground: '#00000008',
    background: '#F6F4F4',
    primary: '#3e3f31',
    secondary: '#e2dae1',
    accent: '#72656b',
  },
  fontSize: {
    small: '12px',
    normal: '16px',
    big: '20px',
  },
  fontWeight: {
    small: '400',
    normal: '500',
    big: '700',
  },
  buttonSize: {
    projFormH: '48px',
  },
  sizes: {
    icon: '25',
  },
  device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    MmobileL: `(max-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    Mtablet: `(max-width: ${size.tablet})`,
    Mlaptop: `(max-width: ${size.laptop})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
  },
  radius: {
    mainRadius: '30px',
    secondaryRadius: '15px',
    thirdRadius: '8px',
  },
  fonts: {
    interBold: 'Inter Bold',
    interRegular: 'Inter Regular',
    interMedium: 'Inter medium',
  },
  width: {
    desktopMaxWidthForm: '60rem',
  },
  maxView: {
    menuBar: '1500px',
  },
};

export const breakpoints = {
  mobileMini: 260,
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopHelper: 1280,
  laptopL: 1440,
  desktop: 2560,
};
