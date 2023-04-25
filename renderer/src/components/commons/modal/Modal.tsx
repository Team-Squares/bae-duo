import React, { useCallback } from 'react'
import * as Styled from './Modal.styles'
import XmarkImg from '@/public/images/xmark_grey.svg'
import Image from 'next/image'

export interface ModalPropsType {
  id: string
  title: string
  width: string
  height: string
  left: string
  top: string
  children: JSX.Element
  submitBtnContent?: string
  cancelBtnContent?: string
  closeModal: () => any
  submitFunc?: () => any
  mode: 'submit' | 'info'
}

const Modal = (props: ModalPropsType) => {
  const {
    id,
    width,
    height,
    left,
    top,
    title,
    closeModal,
    submitFunc = () => {},
    children,
    submitBtnContent = 'Submit',
    cancelBtnContent = 'cancel',
    mode,
  } = props

  const getComponentByMode = useCallback(() => {
    if (mode === 'submit')
      return (
        <Styled.BtnBox>
          <Styled.CancleBtn onClick={closeModal}>
            <div>{cancelBtnContent}</div>
          </Styled.CancleBtn>
          <Styled.SubmitBtn
            onClick={e => {
              e.stopPropagation()
              submitFunc()
            }}
          >
            <div>{submitBtnContent}</div>
          </Styled.SubmitBtn>
        </Styled.BtnBox>
      )
    else
      return (
        <Styled.CheckBox>
          <input
            type="checkbox"
            onClick={e => {
              e.stopPropagation()
              // TODO click되면 해당 info는 오늘 안 보여주기
            }}
          />
          <span>오늘 하루 보지 않기</span>
        </Styled.CheckBox>
      )
  }, [closeModal, mode, submitBtnContent, submitFunc])

  return (
    <Styled.BackGround>
      <Styled.Modal width={width} height={height} left={left} top={top}>
        <Styled.TopBox>
          <Styled.Title>{title}</Styled.Title>
          <Styled.CloseBtn onClick={closeModal}>
            <Image src={XmarkImg} alt="none"></Image>
          </Styled.CloseBtn>
        </Styled.TopBox>
        <Styled.Child>{children}</Styled.Child>
        {getComponentByMode()}
      </Styled.Modal>
    </Styled.BackGround>
  )
}

export default Modal
