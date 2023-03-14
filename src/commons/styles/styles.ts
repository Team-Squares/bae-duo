import { css } from '@emotion/react'

export const color = {
  $default: '#828282',
  $point: '#4263EB',
  $sub: '#8ca315',
  $main: '#ffeb3b',

  $primaryText: '#212529',
  $secondaryText: '#868E96',
  $placeholderText: '#868E96',
  $disabledText: '#ADB5BD',
  $mainText: '#4263eb',

  $baseBg: '#212529',
  $primaryBg: '#4263eb',
  $secondaryBg: '#F5F7FE',
  $defaultBorder: '#dee2e6',
  $blue30: '#8ea1f3',

  //Hierarchy 4,5,6
  $defaultGray: '#dee2e6',
  $lightGray: '#F1F3F5',
  $lightestGray: '#F8F9FA',

  /* color token */
  primary: '#4263EB',
  secondary: '#F5F7FE',

  // gray -> Figma - color token 에 있는 gray 임을 주의
  gray: {
    gray10: '#212529',
    gray20: '#868E96',
    gray30: '#ADB5BD',
    gray40: '#DEE2E6',
    gray50: '#F1F3F5',
    gray60: '#F8F9FA',
  },

  text: {
    black: '#212529',
    gray: '#868E96',
    white: '#FFFFFF',
    placeholder: '#868E96',
    disabled: '#ADB5BD',
    main: '#4263eb',
  },

  bg: {
    base: '#FFFFFF',
    transaprent: '#ADB5BD1A',
  },

  border: {
    default: '#DEE2E6',
  },

  /* color palette */
  blue: {
    blue20: '#B3C1F7',
    blue30: '#8EA1F3',
  },

  red: {
    red5: '#FEF2F2',
    red60: '#DC2626',
  },

  teal: {
    teal10: '#E0F5F6',
    teal60: '#45B9C4',
  },
}

export const typography = {
  heading1: css`
    font-size: 50px;
    font-weight: 700;
    line-height: 1.3;

    @media (max-width: 360px) {
      font-size: 36px;
    }
  `,
  heading2: css`
    font-size: 38px;
    font-weight: 700;
    line-height: 1.3;

    @media (max-width: 360px) {
      font-size: 32px;
      line-height: 1.2;
    }
  `,
  heading3: css`
    font-size: 28px;
    font-weight: 700;
    line-height: 1.3;

    @media (max-width: 360px) {
      font-size: 24px;
      line-height: 1.4;
    }
  `,
  heading4: css`
    font-size: 22px;
    font-weight: 700;
    line-height: 1.5;

    @media (max-width: 360px) {
      font-size: 20px;
    }
  `,
  subheading: css`
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
  `,
  body1: {
    bold: css`
      font-size: 16px;
      line-height: 1.5;
      font-weight: 700;
    `,
    medium: css`
      font-size: 16px;
      line-height: 1.5;
      font-weight: 500;
    `,
    light: css`
      font-size: 16px;
      line-height: 1.5;
      font-weight: 300;
    `,
  },
  body2: {
    bold: css`
      font-size: 14px;
      line-height: 1.5;
      font-weight: 700;
    `,
    medium: css`
      font-size: 14px;
      line-height: 1.5;
      font-weight: 500;
    `,
    light: css`
      font-size: 14px;
      line-height: 1.5;
      font-weight: 300;
    `,
  },
  caption: {
    bold: css`
      font-size: 12px;
      line-height: 1.5;
      font-weight: 700;
    `,
    medium: css`
      font-size: 12px;
      line-height: 1.5;
      font-weight: 500;
    `,
    light: css`
      font-size: 12px;
      line-height: 1.5;
      font-weight: 300;
    `,
  },
}

export const globalStyles = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css');

  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: #212529;
    box-sizing: border-box;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    -moz-tab-size: 4;
    tab-size: 4;
  }
  html {
    font-family: 'Pretendard', 'Noto Sans', sans-serif;
  }
  html,
  body {
    height: 100%;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  button {
    background: none;
    border: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`
