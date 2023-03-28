import React from 'react'
import DefaultLayout from '@/renderer/src/components/commons/layout/DefaultLayout'
import FundingDetail from '@/renderer/src/components/units/fundingDetail/fundingDetail'

const index = () => {
  return (
    <DefaultLayout title={'안녕 난 헤더얌'}>
      <FundingDetail />
    </DefaultLayout>
  )
}

export default index
