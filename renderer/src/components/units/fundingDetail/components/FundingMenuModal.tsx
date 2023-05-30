import React from 'react'
import * as Styled from '../FundingDetail.style'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'
import { FundingListType } from '../../home/Home.types'

const FundingMenuModal = ({ menuImages }: Pick<FundingListType, 'menuImages'>) => {
  return (
    <Styled.FunidngMenuContainer>
      <Swiper
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {menuImages?.map(list => {
          return (
            <SwiperSlide key={list.id}>
              <img src={list.url} alt={list.url} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Styled.FunidngMenuContainer>
  )
}

export default FundingMenuModal
