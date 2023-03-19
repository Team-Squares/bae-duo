import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import moment from 'moment'
import * as Styled from './Home.styles'
import { FaClock } from 'react-icons/fa'
import { RiUser3Fill, RiAddLine } from 'react-icons/ri'
import { categoryName, getKORMoneyString, getPercentage, tagByStatus } from './data'
import tempProfileImg from '@/public/images/profile_small.svg'
import starterImg from '@/public/images/starter.svg'
import dummyData from './dummy.json'
import Button from '../../commons/button/Button'
import Tag from '../../commons/tag/Tag'

const Home = () => {
  const [category, setCategory] = useState(0)

  useEffect(() => {
    dummyData.sort((a, b) => {
      let firstDate = new Date(a.createdAt)
      let lastestDate = new Date(b.createdAt)
      return moment(firstDate).diff(lastestDate)
    })
  }, [])
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
        {dummyData.map(item => {
          let date = new Date(item.createdAt)
          let dead = new Date(item.deadline)
          const fundingDate = moment(date).format('YYYY-MM-DD')
          const deadlineTime = moment(dead).format('hh:mm')

          return (
            (category === 0 || item.status === category) && (
              <Fragment key={item.createdAt}>
                <Styled.BrandsCard>
                  <Styled.FundingInfo>
                    <Styled.StatusBox>
                      <Styled.FundingDate>{fundingDate}</Styled.FundingDate>
                      <Tag
                        text={`펀딩 ${categoryName[item.status] ?? '실패'}`}
                        color={tagByStatus(item.status)?.color}
                        background={tagByStatus(item.status)?.background}
                      />
                    </Styled.StatusBox>
                    <section>
                      <Styled.BrandName>{item.brand}</Styled.BrandName>
                      <Styled.Starter>
                        <Image src={tempProfileImg} alt="none" width={16} height={16} />
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
                        <b>{deadlineTime}</b>
                        <span> 마감</span>
                      </div>
                    </div>
                  </Styled.LimitBox>
                  <Styled.ProgressBox>
                    <Styled.Percentage percentage={getPercentage(item.cur_price, item.total_price)}>
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
          )
        })}
      </Styled.BrandsBox>
    </div>
  )
}

export default Home
