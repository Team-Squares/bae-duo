import React from 'react'
import Image from 'next/image'
import * as Styled from '../FundingDetail.style'
import Progress from './Progress'
import hansotImg from '@/public/images/hansot.svg'

const FundingInfoList = ({ ...props }) => {
  const { data, totalPrice, fundingData } = props

  return (
    <Styled.FundingInfoList>
      <div className="fundingImg">
        <Image src={hansotImg.src} alt={'펀딩 이미지'} width={500} height={200} />
      </div>
      <Progress type={'price'} data={totalPrice} defaultPrice={fundingData?.minPrice} />
      <Progress type={'time'} />
      <Progress type={'member'} data={data?.length} defaultMember={fundingData?.minMember} />
    </Styled.FundingInfoList>
  )
}

export default FundingInfoList
