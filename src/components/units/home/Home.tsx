import { useState } from 'react'
import Image from 'next/image'
import * as Styled from './Home.styles'
import tempProfileImg from '@/public/images/profile_small.svg'
import starterImg from '@/public/images/starter.svg'
import { FaClock } from 'react-icons/fa'
import { RiUser3Fill } from 'react-icons/ri'
import dummyData from './dummy.json'

const Home = () => {
  const [category, setCategory] = useState(1)
  console.log(dummyData, new Date())
  return (
    <Styled.Container>
      <div style={{ width: '80%' }}>
        <div>
          <Styled.GuideBox>
            <span>펀딩 목록</span>
            <span>+ 펀딩 만들기</span>
          </Styled.GuideBox>
          <Styled.CategoryBox category={category}>
            <button onClick={() => setCategory(1)}>전체</button>
            <button onClick={() => setCategory(2)}>진행중</button>
            <button onClick={() => setCategory(3)}>완료</button>
          </Styled.CategoryBox>
        </div>
        <Styled.BrandsBox>
          <Styled.BrandsCard>
            <Styled.FundingInfo>
              <Styled.StatusBox>
                <Styled.FundingDate>2023.02.16</Styled.FundingDate>
                <Styled.Status>펀딩 진행 중</Styled.Status>
              </Styled.StatusBox>
              <div>
                <Styled.BrandName>한솥 도시락 종각점</Styled.BrandName>
                <Styled.Starter>
                  <Image src={tempProfileImg} alt="none"></Image>
                  <Styled.StarterName>문동은</Styled.StarterName>
                  <Image src={starterImg} alt="none"></Image>
                </Styled.Starter>
              </div>
            </Styled.FundingInfo>
            <Styled.LimitBox>
              <div>
                <RiUser3Fill />
                <span>3/4 참여</span>
              </div>
              <div>
                <FaClock />
                <span>11:00 마감</span>
              </div>
            </Styled.LimitBox>
            <Styled.ProgressBox>
              <Styled.Percentage>
                <span>56% 달성했어요</span>
                <span>16,900원 / 30,000원</span>
              </Styled.Percentage>
              <Styled.ProgressBar />
            </Styled.ProgressBox>
          </Styled.BrandsCard>
        </Styled.BrandsBox>
      </div>
    </Styled.Container>
  )
}

export default Home
