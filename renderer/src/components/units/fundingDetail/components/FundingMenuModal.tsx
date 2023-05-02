import React from 'react'
import * as Styled from '../FundingDetail.style'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'

const FundingMenuModal = () => {
  const dummyImgs = [
    { id: 1, url: '/1.jpeg' },
    { id: 2, url: '/2.jpeg' },
    { id: 3, url: '/3.jpeg' },
    { id: 4, url: '/4.jpeg' },
    { id: 5, url: '/5.jpeg' },
    { id: 6, url: '/6.jpeg' },
    { id: 7, url: '/7.jpeg' },
    { id: 8, url: '/8.jpeg' },
    { id: 9, url: '/9.jpeg' },
    { id: 10, url: '/10.jpeg' },
    { id: 11, url: '/11.jpeg' },
  ]
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
        {/*<SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>*/}
        {dummyImgs.map(list => {
          return (
            <SwiperSlide key={list.id}>
              <img src={`/samples${list.url}`} alt={list.url} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Styled.FunidngMenuContainer>
  )
}

export default FundingMenuModal
