import DefaultLayout from '@/src/components/commons/layout/DefaultLayout'
import AddFunding from '@/src/components/units/addFunding/AddFunding'
import React from 'react'

const add = () => {
  return (
    <DefaultLayout isNav={true}>
      <AddFunding />
    </DefaultLayout>
  )
}

export default add
