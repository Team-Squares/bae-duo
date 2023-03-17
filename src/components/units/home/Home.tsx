import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import * as Styled from './Home.styles'
import { FaClock } from 'react-icons/fa'
import { RiUser3Fill, RiAddLine } from 'react-icons/ri'
import tempProfileImg from '@/public/images/profile_small.svg'
import starterImg from '@/public/images/starter.svg'
import dummyData from './dummy.json'
import Button from '../../commons/button/Button'
import Tag from '../../commons/tag/Tag'

const categoryName = ['전체', '진행 중', '완료']

const Home = () => {
  const [category, setCategory] = useState(0)

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

  return (
    <div>
      <Styled.LandingHeader>
        <Styled.CategoryBox category={category}>
          {categoryName.map((item, idx) => (
            <button key={idx} onClick={() => setCategory(idx)}>
              {item}
            </button>
          ))}
        </Styled.CategoryBox>
        <Button size="small" variant="outlined">
          펀딩 추가 <RiAddLine />
        </Button>
      </Styled.LandingHeader>
      <Styled.BrandsBox>
        {dummyData.map(
          item =>
            (category === 0 || item.status === category) && (
              <Fragment key={item.createdAt}>
                <Styled.BrandsCard>
                  <Styled.FundingInfo>
                    <Styled.StatusBox>
                      <Styled.FundingDate>{getCreateDate(item.createdAt)}</Styled.FundingDate>
                      <Tag
                        text={`펀딩 ${categoryName[item.status] ?? '실패'}`}
                        color="#45B9C4"
                        background={'#E0F5F6'}
                      />
                    </Styled.StatusBox>
                    <section>
                      <Styled.BrandName>{item.brand}</Styled.BrandName>
                      <Styled.Starter>
                        <Image src={tempProfileImg} alt="none" />
                        <span>{item.starter}</span>
                        <Image src={starterImg} alt="none" />
                      </Styled.Starter>
                    </section>
                  </Styled.FundingInfo>
                  <Styled.LimitBox>
                    <div>
                      <RiUser3Fill />
                      <div>
                        <b>
                          {item.cur_member}/{item.min_member}
                        </b>
                        <span> 명 참여</span>
                      </div>
                    </div>
                    <div>
                      <FaClock />
                      <div>
                        <b>{getEndTime(item.deadline)}</b>
                        <span> 마감</span>
                      </div>
                    </div>
                  </Styled.LimitBox>
                  <Styled.ProgressBox>
                    <Styled.Percentage>
                      <span>{`${getPercentage(item.cur_price, item.total_price)}% 달성했어요`}</span>
                      <span>{`${getKORMoneyString(item.cur_price)}원 / ${getKORMoneyString(item.total_price)}원`}</span>
                    </Styled.Percentage>
                    <Styled.ProgressBar percentage={getPercentage(item.cur_price, item.total_price)}>
                      <div></div>
                    </Styled.ProgressBar>
                  </Styled.ProgressBox>
                </Styled.BrandsCard>
              </Fragment>
            )
        )}
      </Styled.BrandsBox>
    </div>
  )
}

export default Home
