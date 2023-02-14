import * as Styled from './Home.styles'
import Image from 'next/image'
import tempProfileImg from '@/public/images/profile_small.svg'
import starterImg from '@/public/images/starter.svg'

const Home = () => {
  return (
    <Styled.Container>
      <div style={{ width: '80%' }}>
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
            <div>
              <Styled.LimitBox>
                <Styled.Limit>11:00마감</Styled.Limit>
                <Styled.Limit>최소 4명</Styled.Limit>
              </Styled.LimitBox>
              <div>
                <div>한솥 도시락 종각점</div>
                <div>
                  <Image src={tempProfileImg} alt="none"></Image>
                  <span>문동은</span>
                  <Image src={starterImg} alt="none"></Image>
                </div>
              </div>
            </div>
            <div>
              <div>
                <span>56% 달성했어요</span>
                <Styled.Price>30,000원</Styled.Price>
              </div>
              <div></div>
            </div>
          </Styled.BrandsCard>
        </Styled.BrandsBox>
      </div>
    </Styled.Container>
  )
}

export default Home
