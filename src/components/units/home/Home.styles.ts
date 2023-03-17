import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { color } from '@/src/commons/styles/styles'
import hansotImg from '@/public/images/hansot.svg'

const displayCenter = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LandingHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
`

export const CategoryBox = styled.div<{ category: number }>`
  display: flex;
  gap: 5px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 78px;
    height: 37px;
    border-radius: 100px;
    border: none;
    background-color: ${color.$transparentBg};
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
  border-radius: 10px;
  overflow: hidden;
  min-width: 200px;
  height: 300px;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  transition: all 0.3s cubic-bezier(0.3, 0, 0.2, 1);
  :hover {
    transform: translateY(-3%);
  }
`

export const FundingInfo = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${hansotImg.src}), no-repeat;
  /*filter: brightness(60%);*/

  height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 20px;
  font-size: 12px;
  /*background-blend-mode: darken;*/
`

export const StatusBox = styled.div`
  display: flex;
  justify-content: space-between;
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
  margin-bottom: 5px;
`

export const Starter = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  span {
    color: white;
    font-weight: bold;
    font-size: 16px;
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
    &:nth-child(1) {
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
  padding: 0 20px;
`

export const Percentage = styled.div`
  /*background-color: white;*/
  span:first-child {
    margin-right: 5px;
    font-size: 14px;
    font-weight: bold;
  }
  span:last-child {
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
