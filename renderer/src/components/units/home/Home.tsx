import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import moment from 'moment'
import * as Styled from './Home.styles'
import { FaClock } from 'react-icons/fa'
import { TbNotesOff } from 'react-icons/tb'
import { RiUser3Fill, RiAddLine } from 'react-icons/ri'
import { categoryName, getKORMoneyString, getPercentage, tagByStatus } from './data'
import tempProfileImg from '@/public/images/profile_small.svg'
import starterImg from '@/public/images/starter.svg'
import Button from '../../commons/button/Button'
import Tag from '../../commons/tag/Tag'
import { useQuery, useQueryClient } from 'react-query'
import { getAllFundingList } from '@/src/commons/api/main/mainApi'
import { getAllFundingListProps } from '@/src/commons/types/mainApi'
import { useRouter } from 'next/router'
import Skeleton from '../../commons/skeleton/Skeleton'
import { Flex } from '../addFunding/AddFunding.styles'

const Home = () => {
  const router = useRouter()
  const queryClient = useQueryClient() //delete할때 필요.
  const [category, setCategory] = useState(0)
  const [fundingList, setFundingList] = useState<getAllFundingListProps[]>([])
  const { isLoading, isFetching, data, isSuccess } = useQuery(['getAllFundingList'], () => getAllFundingList())

  useEffect(() => {
    if (isSuccess) {
      const sortByReverse = data.sort((a, b) => moment(b.createdAt).diff(a.createdAt))
      const filterByCategory =
        category === 1
          ? sortByReverse.filter(list => list.status === 1)
          : category === 2
          ? sortByReverse.filter(list => list.status === 2)
          : sortByReverse
      setFundingList(filterByCategory)
    }
  }, [category, data, isSuccess])

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
        <Button size="small" variant="outlined" onClick={() => router.push('/funding/add')}>
          펀딩 추가 <RiAddLine />
        </Button>
      </Styled.LandingHeader>
      {isLoading ? (
        <Flex gap={16}>
          <Skeleton isCol />
          <Skeleton isCol />
          <Skeleton isCol />
        </Flex>
      ) : (
        <Styled.BrandsBox>
          {fundingList?.map(item => (
            <Fragment key={item.createdAt}>
              <Styled.BrandsCard>
                <Styled.FundingInfo>
                  <Styled.StatusBox>
                    <Styled.FundingDate>{moment(item.createdAt).format('YYYY.MM.DD')}</Styled.FundingDate>
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
                      <b>{moment(item.deadline).format('hh:mm')}</b>
                      <span> 마감</span>
                    </div>
                  </div>
                </Styled.LimitBox>
                <Styled.ProgressBox>
                  <Styled.Percentage percentage={getPercentage(item.curPrice, item.curPrice * item.curMember)}>
                    {item.curMember ? (
                      <span>{`${getPercentage(item.curPrice, item.minPrice)}% 달성했어요`}</span>
                    ) : (
                      <span>참여인원이 없습니다.</span>
                    )}
                    <span>{`${getKORMoneyString(item.curPrice)}원 / ${getKORMoneyString(item.minPrice)}원`}</span>
                  </Styled.Percentage>
                  <Styled.ProgressBar percentage={getPercentage(item.curPrice, item.minPrice)}>
                    <div></div>
                  </Styled.ProgressBar>
                </Styled.ProgressBox>
              </Styled.BrandsCard>
            </Fragment>
          ))}
        </Styled.BrandsBox>
      )}
      {fundingList.length === 0 && !isLoading && (
        <Styled.EmptySection>
          <TbNotesOff style={{ width: '24px', height: '24px' }} />
          empty data
        </Styled.EmptySection>
      )}
    </div>
  )
}

export default Home
