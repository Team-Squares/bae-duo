import { color, colorPalette } from '@/src/commons/styles/color'
import { typography } from '@/src/commons/styles/typography'
import styled from '@emotion/styled'

export const AddFundingHeader = styled.div`
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
`

export const HeaderTitle = styled.h1`
  ${typography.heading4}
`
export const HeaderSubTitle = styled.p`
  margin-top: 8px;
  ${typography.body1.medium}
`

export const AddFundingBody = styled.div`
  max-width: 688px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`

export const SettingCard = styled.div`
  border-radius: 5px;
  border: 1px solid ${color.border.default};
  /* padding: 30px; */
  /* overflow: hidden; */
  padding: 30px 0;
`
export const SettingCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 34px; */
  padding: 0 30px;
  margin-bottom: 30px;

  h2 {
    ${typography.body1.bold}
  }

  ul {
    list-style: none;
    display: flex;
    ${typography.body2.medium}

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
export const SettingCardBody = styled.div`
  /* margin-top: 30px; */
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
`

export const BrandImageContainer = styled.div<{ isActive?: boolean }>`
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
`

export const BrandInfo = styled.div<{ isActive?: boolean }>`
  .title {
    ${typography.body2.bold}
    color: ${props => props.isActive && color.primary};
    font-weight: ${props => props.isActive && 700};
  }
  .funding-count {
    color: ${props => (props.isActive ? colorPalette.blue.blue30 : color.text.gray)};
    margin-top: 8px;
    ${typography.caption.medium}
  }
`

// Flex
export const Flex = styled.div<{ direction?: string; gap?: number; alignItems?: string; justifyContent?: string }>`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  gap: ${props => `${props.gap || 0}px`};
`

export const FlexCenter = styled.div<{ direction?: string; gap?: number }>`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: center;
  justify-content: center;
  gap: ${props => `${props.gap || 0}px`};
`
