import React, { useCallback, useLayoutEffect, useState } from 'react'
import Image from 'next/image'
import * as Styled from './Home.styles'
import tempProfileImg from '@/public/images/profile_small.svg'
import starterImg from '@/public/images/starter.svg'
import { FaClock } from 'react-icons/fa'
import { RiUser3Fill } from 'react-icons/ri'
import { FundingListType } from './Home.types'
import { getFundingList } from '@/src/commons/api/subApi'

const categoryName = ['전체', '진행 중', '완료']

const Home = () => {
  const [category, setCategory] = useState(0)
  const [fundingList, setFundingList] = useState<FundingListType[] | null>(null)

  const getCreateDate = (date: string) => {
    const dateObj = new Date(date)
    const year = dateObj.getFullYear()
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0')
    const day = dateObj.getDate().toString().padStart(2, '0')
    return `${year}.${month}.${day}`
  }

  const getEndTime = (date: string) => {
    const dateObj = new Date(date)
    const hour = dateObj.getHours()
    const minute = dateObj.getMinutes().toString().padStart(2, '0')
    return `${hour}:${minute}`
  }

  const getKORMoneyString = (money: number) => {
    return money.toLocaleString('ko-KR', {
      currency: 'KRW',
    })
  }

  const getPercentage = (numerator: number, denominator: number) => {
    return Math.floor((numerator / denominator) * 100)
  }

  // 서버에서 fundingList를 가져와서 상태값에 넣어줌
  useLayoutEffect(() => {
    getFundingList().then(res => setFundingList(res.data))
  }, [])

  if (!fundingList) return <></>
  return (
    <Styled.Container>
      <div style={{ width: '100%' }}>
        <Styled.GuideBox>
          <span>펀딩 목록</span>
          <span>+ 펀딩 만들기</span>
        </Styled.GuideBox>
        <Styled.CategoryBox category={category}>
          {categoryName.map((item, idx) => (
            <button key={`category ${idx}`} onClick={() => setCategory(idx)}>
              {item}
            </button>
          ))}
        </Styled.CategoryBox>
        <Styled.BrandsGrid>
          {fundingList.map(
            (item, idx) =>
              (category === 0 || item.status === category) && (
                <React.Fragment key={`funding ${idx}`}>
                  <Styled.BrandsBox>
                    <Styled.BrandsCard>
                      <Styled.FundingInfo>
                        <Styled.StatusBox>
                          <Styled.FundingDate>{getCreateDate(item.createdAt)}</Styled.FundingDate>
                          <Styled.Status>{categoryName[item.status]}</Styled.Status>
                        </Styled.StatusBox>
                        <div>
                          <Styled.BrandName>{item.brand}</Styled.BrandName>
                          <Styled.Starter>
                            <Image src={tempProfileImg} alt="none"></Image>
                            <span>{item.starter}</span>
                            <Image src={starterImg} alt="none"></Image>
                          </Styled.Starter>
                        </div>
                      </Styled.FundingInfo>
                      <Styled.LimitBox>
                        <div>
                          <RiUser3Fill />
                          <span>
                            {item.cur_member}/{item.min_member} 참여
                          </span>
                        </div>
                        <div>
                          <FaClock />
                          <span>{getEndTime(item.deadline)} 마감</span>
                        </div>
                      </Styled.LimitBox>
                      <Styled.ProgressBox>
                        <Styled.Percentage>
                          <span>{`${getPercentage(item.cur_price, item.total_price)}% 달성했어요`}</span>
                          <span>{`${getKORMoneyString(item.cur_price)}원 / ${getKORMoneyString(
                            item.total_price
                          )}원`}</span>
                        </Styled.Percentage>
                        <Styled.ProgressBar percentage={getPercentage(item.cur_price, item.total_price)}>
                          <div></div>
                        </Styled.ProgressBar>
                      </Styled.ProgressBox>
                    </Styled.BrandsCard>
                  </Styled.BrandsBox>
                </React.Fragment>
              )
          )}
        </Styled.BrandsGrid>
      </div>
    </Styled.Container>
  )
}

export default Home
