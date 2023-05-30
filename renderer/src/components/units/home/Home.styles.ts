import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { color } from '@/src/commons/styles/styles'
import hansotImg from '@/public/images/hansot.svg'
import { typography } from '@/src/commons/styles/typography'

const displayCenter = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LandingHeader = styled.header`
  ${displayCenter}
  margin-bottom: 16px;
`
export const CategoryBox = styled.div<{ category: number }>`
  display: flex;
  gap: 5px;
  button {
    text-align: center;
    width: 78px;
    height: 37px;
    border-radius: 100px;
    border: none;
    background-color: ${color.$lightGray};
    color: ${color.$disabledText};
    cursor: pointer;
  }
  button:nth-of-type(${props => props.category + 1}) {
    background-color: #4263eb;
    color: white;
  }
`

export const BrandsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`

export const BrandsCard = styled.div`
  min-width: 200px;
  height: fit-content;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  transition: all 0.3s cubic-bezier(0.3, 0, 0.2, 1);
  :hover {
    box-shadow: 0 2px 8px hsl(212deg 7% 43% / 32%);
    transform: translateY(-0.2%);
  }
`

export const FundingInfo = styled.div<{ imgUrl: string }>`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    ${props => (props.imgUrl ? `url(${props.imgUrl})` : `url(${hansotImg.src})`)}, no-repeat, center;
  background-size: cover;
  height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 20px;
  font-size: 12px;
`

export const StatusBox = styled.div`
  ${displayCenter}
  gap: 5px;
`

export const FundingDate = styled.div`
  color: white;
`

export const Status = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 3px 6px;
  font-size: 12px;
  color: #4263eb;
`

export const BrandName = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 12px;
`

export const Starter = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  span {
    color: white;
    font-size: 12px;
  }
`

// Limit
export const LimitBox = styled.span`
  display: flex;
  padding: 16px;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 50%;
    font-size: 12px;
    :nth-of-type(1) {
      border-right: 2px solid ${color.$lightGray};
    }
    > svg {
      width: 12px;
      height: 12px;
      path {
        color: #dee2e6;
      }
    }
  }
  span {
    color: #868e96;
  }
`

// Progress
export const ProgressBox = styled.div`
  padding: 0 20px 20px;
  font-size: 14px;
`

export const Percentage = styled.div<{ percentage: number }>`
  ${displayCenter}
  span:nth-of-type(1) {
    margin-right: 5px;
    font-weight: bold;
    color: ${props => `${props.percentage > 100 && color.$mainText}`};
  }
  span:last-of-type(1) {
    font-size: 12px;
    color: #868e96;
  }
`

export const ProgressBar = styled.div<{ percentage: number }>`
  height: 13px;
  border-radius: 10px;
  margin-top: 12px;
  background-color: #adb5bd1a;
  div {
    height: 100%;
    width: ${props => `${props.percentage > 100 ? 100 : props.percentage}%`};
    background-color: ${color.$point};
    border-radius: 10px;
  }
`

export const EmptySection = styled.section`
  width: 100%;
  height: 292px;
  background-color: ${color.$lightestGray};
  color: ${color.$secondaryText};
  ${displayCenter};
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  text-transform: capitalize;
  /*${typography.body1.medium};*/
  path {
    color: ${color.$secondaryText};
  }
`
