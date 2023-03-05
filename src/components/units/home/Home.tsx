import * as Styled from './Home.styles'
import Image from 'next/image'
import tempProfileImg from '@/public/images/profile_small.svg'
import starterImg from '@/public/images/starter.svg'
import { FaClock } from 'react-icons/fa'
// import Skeleton from '../../commons/skeleton/Skeleton'
// import Tag from '../../commons/tag/Tag'
import { RiUser3Fill } from 'react-icons/ri'

const Home = () => {
  return (
    <Styled.Container>
      <div style={{ width: '80%' }}>
        {/* <Tag text={'default'} />
        <Tag text={'hi'} color={color.$warning} />
        <Tag text={'bye'} color={color.$main} /> */}
        <div>
          <Styled.GuideBox>
            <div>펀딩 목록</div>
            <div>
              <div>+ 펀딩 만들기</div>
            </div>
          </Styled.GuideBox>
          <Styled.ProgressBtnBox>
            <Styled.ProgressBtn>전체</Styled.ProgressBtn>
            <Styled.ProgressBtn>진행중</Styled.ProgressBtn>
            <Styled.ProgressBtn>완료</Styled.ProgressBtn>
          </Styled.ProgressBtnBox>
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
      {/* <Skeleton isCol width={60} height={60} /> */}
    </Styled.Container>
  )
}

export default Home
