import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { color } from '@/src/commons/styles/styles'
import hansotImg from '@/public/images/hansot.svg'

const displayCenter = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 300px;
`
export const GuideBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  span:first-of-type {
    font-weight: bold;
  }
  span:last-child {
    font-size: 14px;
    color: #4263eb;
  }
`

export const CategoryBox = styled.div<{ category: number }>`
  display: flex;
  margin-bottom: 15px;
  gap: 5px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 78px;
    height: 37px;
    border-radius: 100px;
    border: none;
    background-color: #adb5bd1a;

    cursor: pointer;
  }
  button:nth-of-type(${props => props.category + 1}) {
    background-color: #4263eb;
    color: white;
  }
`

export const BrandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`

export const BrandsBox = styled.div``

export const BrandsCard = styled.div`
  border: 1px solid ${color.$default};
  border-radius: 10px;
  overflow: hidden;
`

export const FundingInfo = styled.div`
  background: url(${hansotImg.src});
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
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
  padding-top: 10px;
  & > div {
    display: flex;
    justify-content: center;
    width: 50%;
  }
  span {
    font-size: 14px;
  }
`

// Progress
export const ProgressBox = styled.div`
  /* height: 35%; */
  padding: 10px;
`

export const Percentage = styled.div`
  background-color: white;
  /* border-radius: 0px 0px 10px 10px; */
  span:first-of-type {
    margin-right: 5px;
    font-size: 14px;
    font-weight: bold;
  }
  span:last-child {
    font-size: 11px;
  }
`

export const ProgressBar = styled.div<{ percentage: number }>`
  height: 13px;
  border-radius: 10px;
  margin-top: 12px;
  background-color: #adb5bd1a;
  div {
    height: 100%;
    width: ${props => `${props.percentage}%`};
    background-color: #6c56f9;
    border-radius: 10px;
  }
`
