import { css } from '@emotion/react'

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
