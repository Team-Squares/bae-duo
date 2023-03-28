export const colorPalette = {
  black: '#000000',
  white: '#FFFFFF',

  gray: {
    gray5: '#F8F9FA',
    gray10: '#F1F3F5',
    gray15: '#DEE2E6',
    gray20: '#ADB5BD',
    gray30: '#868E96',
    gray40: '#6D757E',
    gray50: '#5F666D',
    gray60: '#51575C',
    gray70: '#3B4044',
    gray80: '#31363A',
    gray90: '#212529',
  },

  blue: {
    blue5: '#F5F7FE',
    blue10: '#D9E0FB',
    blue20: '#B3C1F7',
    blue30: '#8EA1F3',
    blue40: '#6882EF',
    blue50: '#4263EB',
    blue60: '#354FBC',
    blue70: '#283B8D',
    blue80: '#1A285E',
    blue90: '#0D142F',
  },

  red: {
    red5: '#FEF2F2',
    red10: '#FEE2E2',
    red20: '#FECACA',
    red30: '#FCA5A5',
    red40: '#F87171',
    red50: '#EF4444',
    red60: '#DC2626',
    red70: '#B91C1C',
    red80: '#991B1B',
    red90: '#7F1D1D',
  },

  yellow: {
    yellow10: '#FDF3E3',
    yellow20: '#FBE7C7',
    yellow30: '#F9DAAA',
    yellow40: '#F7CE8E',
    yellow50: '#F5C272',
    yellow60: '#F0AB38',
  },

  teal: {
    teal10: '#E0F5F6',
    teal20: '#C2EBED',
    teal30: '#A3E2E5',
    teal40: '#85D8DC',
    teal50: '#66CED3',
    teal60: '#45B9C4',
  },
}

export const color = {
  primary: colorPalette.blue.blue50,
  secondary: colorPalette.blue.blue5,

  // gray -> Figma - color token 에 있는 gray 임을 주의
  gray: {
    gray10: colorPalette.gray.gray90,
    gray20: colorPalette.gray.gray30,
    gray30: colorPalette.gray.gray20,
    gray40: colorPalette.gray.gray15,
    gray50: colorPalette.gray.gray10,
    gray60: colorPalette.gray.gray5,
  },

  text: {
    black: colorPalette.gray.gray90,
    gray: colorPalette.gray.gray30,
    white: colorPalette.white,
    placeholder: colorPalette.gray.gray30,
    disabled: colorPalette.gray.gray20,
    main: colorPalette.blue.blue50,
  },

  bg: {
    base: colorPalette.white,
    transaprent: `rgba(173, 181, 189, 0.1)`, // gray20.10%
  },

  border: {
    default: colorPalette.gray.gray15,
  },
}
