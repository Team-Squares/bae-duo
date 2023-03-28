import { color, colorPalette } from '@/src/commons/styles/color'
import { typography } from '@/src/commons/styles/typography'
import styled from '@emotion/styled'

export const TitleContainer = styled.div`
  margin-bottom: 48px;
  display: flex;
  justify-content: space-between;

  .title {
    ${typography.heading3}
  }
  .subTitle {
    margin-top: 8px;
    ${typography.body1.medium}
  }
`

export const Title = styled.h1`
  ${typography.heading3}
`
export const SubTitle = styled.p`
  margin-top: 8px;
  ${typography.body1.medium}
`

export const ContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  > div {
    flex: 1;
  }
`

export const SettingCard = styled.div`
  border-radius: 5px;
  border: 1px solid ${color.border.default};
  /* padding: 30px; */
  overflow: hidden;
  padding: 30px 0;
`

export const SettingCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 34px; */
  padding: 0 30px;

  h2 {
    ${typography.heading4}
  }

  ul {
    list-style: none;
    display: flex;
    ${typography.body1.medium}

    li {
      padding: 0 8px;
      cursor: pointer;
      color: ${color.text.gray};
    }

    li + li {
      margin-left: 4px;
    }

    .active {
      color: ${color.primary};
      font-weight: 700;
    }
  }
`
export const SettingCardContents = styled.div`
  margin-top: 30px;
`

export const CardContents = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 30px;
`

export const Brand = styled.div<{ isActive?: boolean }>`
  display: flex;
  gap: 20px;
  background-color: ${props => props.isActive && color.secondary};
  padding: 12px 30px;
  cursor: pointer;

  :hover {
    background-color: ${color.secondary};
  }

  .brand-img-container {
    width: 80px;
    height: 80px;
    border: 2px solid ${props => (props.isActive ? color.primary : color.border.default)};
    border-radius: 10px;
    overflow: hidden;

    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }
  }

  .info-container {
    .title {
      ${typography.body1.medium}
      color: ${props => props.isActive && color.primary};
      font-weight: ${props => props.isActive && 700};
    }
    .funding-count {
      color: ${props => (props.isActive ? colorPalette.blue.blue30 : color.text.gray)};
      margin-top: 8px;
      ${typography.body2.medium}
    }
  }
`

export const Flex = styled.div<{ direction?: string; gap?: number; alignItems?: string; justifyContent?: string }>`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  gap: ${props => `${props.gap}px` || '0px'};
`

export const FlexCenter = styled.div<{ direction?: string; gap?: number }>`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: center;
  justify-content: center;
  gap: ${props => `${props.gap}px` || '0px'};
`
