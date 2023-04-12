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
import { useQuery, useQueryClient } from 'react-query'
import { getAllFundingList } from '@/src/commons/api/mainApi'

const Home = () => {
  const queryClient = useQueryClient() //delete할때 필요.
  const [category, setCategory] = useState(0)
  const { isLoading, data } = useQuery(['getAllFundingList'], () => getAllFundingList(), {
    //cacheTime: 0,
    retry: 1,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 3000,
  })

  console.log('data:::', data)

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
        {data?.map(
          item =>
            (category === 0 || item.status === category) && (
              <Fragment key={item.createdAt}>
                <Styled.BrandsCard>
                  <Styled.FundingInfo>
                    <Styled.StatusBox>
                      {/*<Styled.FundingDate>{moment(item.createdAt).format('YYYY.MM.DD')}</Styled.FundingDate>*/}
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
                          {item.curMember}/{item.minMember}
                        </b>
                        <span> 명 참여</span>
                      </div>
                    </div>
                    <div>
                      <FaClock />
                      <div>
                        {/*<b>{moment(item.deadline).format('hh:mm')}</b>*/}
                        <span> 마감</span>
                      </div>
                    </div>
                  </Styled.LimitBox>
                  <Styled.ProgressBox>
                    {item.curMember ? (
                      <Styled.Percentage percentage={getPercentage(item.curPrice, item.curPrice * item.curMember)}>
                        <span>{`${getPercentage(item.curPrice, item.minPrice)}% 달성했어요`}</span>
                        <span>{`${getKORMoneyString(item.curPrice)}원 / ${getKORMoneyString(item.minPrice)}원`}</span>
                      </Styled.Percentage>
                    ) : (
                      <span>참여인원이 없습니다.</span>
                    )}
                    <Styled.ProgressBar percentage={getPercentage(item.curPrice, item.curPrice * item.curMember)}>
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
