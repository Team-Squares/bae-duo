import * as Styled from './Home.styles'
import Image from 'next/image'
import tempProfileImg from '@/public/images/profile_small.svg'
import starterImg from '@/public/images/starter.svg'
import Modal from '@/src/components/commons/modal/Modal'
import { useState } from 'react'

const Home = () => {
  const [showModal, setShowModal] = useState(false)

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
            <Styled.FundingInfo>
              <Styled.LimitBox>
                <Styled.Limit>11:00마감</Styled.Limit>
                <Styled.Limit>최소 4명</Styled.Limit>
              </Styled.LimitBox>
              <div>
                <Styled.BrandName>한솥 도시락 종각점</Styled.BrandName>
                <Styled.Starter>
                  <Image src={tempProfileImg} alt="none"></Image>
                  <Styled.StarterName>문동은</Styled.StarterName>
                  <Image src={starterImg} alt="none"></Image>
                </Styled.Starter>
              </div>
            </Styled.FundingInfo>
            <Styled.ProgessBox>
              <Styled.StatusBox>
                <Styled.Status>56% 달성했어요</Styled.Status>
                <Styled.Price>30,000원</Styled.Price>
              </Styled.StatusBox>
              <Styled.ProgressBar
                onClick={() => {
                  setShowModal(true)
                }}
              ></Styled.ProgressBar>
            </Styled.ProgessBox>
          </Styled.BrandsCard>
        </Styled.BrandsBox>
      </div>
      {showModal === true ? (
        <Modal
          width="300px"
          height="300px"
          left="50%"
          top="50%"
          title="test"
          closeModal={() => {
            setShowModal(false)
          }}
          onSubmitFunc={() => {}}
          submitBtnContent="go"
        >
          <span>hello</span>
        </Modal>
      ) : null}
    </Styled.Container>
  )
}

export default Home
