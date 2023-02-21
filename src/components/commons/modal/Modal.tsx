import React, { FC, ReactFragment } from 'react'
import * as Styled from './Modal.styles'
import XmarkImg from '@/public/images/xmark_grey.svg'
import Image from 'next/image'

export interface ModalPropsType {
  title: string
  width: string
  height: string
  left: string
  top: string
  children: JSX.Element
  submitBtnContent?: string
  closeModal: () => any
  onSubmitFunc?: () => any
}

const Skeleton = (props: ModalPropsType) => {
  const { width, height, left, top, title, closeModal, onSubmitFunc, children, submitBtnContent } = props

  return (
    <Styled.BackGround onClick={closeModal}>
      <Styled.Modal width={width} height={height} left={left} top={top}>
        <Styled.TopBox>
          <Styled.Title>{title}</Styled.Title>
          <Styled.CloseBtn>
            <Image src={XmarkImg} alt="none"></Image>
          </Styled.CloseBtn>
        </Styled.TopBox>
        <Styled.Child>{children}</Styled.Child>
        {onSubmitFunc && submitBtnContent ? (
          <Styled.BtnBox>
            <Styled.CancleBtn onClick={closeModal}>
              <div>Cancle</div>
            </Styled.CancleBtn>
            <Styled.SubmitBtn
              onClick={e => {
                e.stopPropagation()
                onSubmitFunc()
              }}
            >
              <div>{submitBtnContent}</div>
            </Styled.SubmitBtn>
          </Styled.BtnBox>
        ) : null}
      </Styled.Modal>
    </Styled.BackGround>
  )
}

export default Skeleton
