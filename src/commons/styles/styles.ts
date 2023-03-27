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
