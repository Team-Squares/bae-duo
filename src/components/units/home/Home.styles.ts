import styled from '@emotion/styled'
import { color } from '@/src/commons/styles/styles'
import hansotImg from '@/public/images/hansot.svg'

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 300px;
`
export const GuideBox = styled.div`
  display: flex;
`

export const ProgressBtnBox = styled.div`
  display: flex;
`
export const ProgressBtn = styled.div``

export const BrandsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const BrandsCard = styled.div`
  border: 1px solid ${color.$default};
  border-radius: 10px;
  height: 220px;
`

export const FundingInfo = styled.div`
  background: url(${hansotImg.src});
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`

export const LimitBox = styled.div`
  display: flex;
  gap: 5px;
`

export const Limit = styled.div`
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
`

export const StarterName = styled.span`
  color: white;
  font-weight: bold;
  font-size: 14px;
`

export const ProgessBox = styled.div`
  height: 35%;
  padding: 10px;
`

export const StatusBox = styled.div`
  background-color: white;
  border-radius: 0px 0px 10px 10px;
`

export const Status = styled.span`
  margin-right: 5px;
  font-size: 14px;
  font-weight: bold;
`

export const Price = styled.span`
  font-size: 11px;
`

export const ProgressBar = styled.div`
  height: 13px;
  width: 90%;
  background-color: #6c56f9;
  border-radius: 10px;
  margin-top: 12px;
`
