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
  $transparentBg: '#adb5bd1a',
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
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  * {
    margin: 0px;
    box-sizing: border-box;
    color: #212529;
    font-family: 'Pretendard-Regular';
  }
`
