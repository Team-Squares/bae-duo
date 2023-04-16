import styled from '@emotion/styled'
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'
import { color } from '@/src/commons/styles/color'
import { typography } from '@/src/commons/styles/typography'

interface ImageUploaderProps {
  images: string[]
  onChangeImages: (images: string[]) => void
}

const ImageUploader = ({ images, onChangeImages }: ImageUploaderProps) => {
  const imgInputRef = useRef<HTMLInputElement | null>(null)
  const dragRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleChangeImage = (e: ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList
    handleSetImageList(targetFiles)
  }

  const handleSetImageList = (fileList: FileList) => {
    const targetFilesArray = Array.from(fileList)
    const selectedFiles: string[] = targetFilesArray.map(file => URL.createObjectURL(file))
    const newImages = [...images, ...selectedFiles]
    onChangeImages(newImages)
  }

  const handleDragIn = useCallback((e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDragOut = useCallback((e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragDrop = useCallback((e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!e.dataTransfer) return

    const targetFiles = e.dataTransfer?.files
    handleSetImageList(targetFiles)
    setIsDragging(false)
  }, [])

  const initDragEvents = useCallback(() => {
    if (!dragRef.current) return
    dragRef.current.addEventListener('dragenter', handleDragIn) // dragenter: 마우스가 대상 객체의 위로 처음 진입할 때 발생
    dragRef.current.addEventListener('dragleave', handleDragOut) // dragleave: 드래그가 끝나서 마우스가 대상 객체의 위에서 벗어날 때 발생
    dragRef.current.addEventListener('dragover', handleDragOver) // dragover: 드래그하면서 마우스가 대상 객체의 위에 자리 잡고 있을 때 발생
    dragRef.current.addEventListener('drop', handleDragDrop) // drop: 드래그가 끝나서 드래그하던 객체를 놓는 장소에 위치한 객체에서 발생
  }, [handleDragDrop, handleDragIn, handleDragOut, handleDragOver])

  const removeDragEvents = useCallback(() => {
    if (!dragRef.current) return
    dragRef.current.removeEventListener('dragenter', handleDragIn)
    dragRef.current.removeEventListener('dragleave', handleDragOut)
    dragRef.current.removeEventListener('dragover', handleDragOver)
    dragRef.current.removeEventListener('drop', handleDragDrop)
  }, [handleDragIn, handleDragOut, handleDragOver, handleDragDrop])

  useEffect(() => {
    initDragEvents()

    return () => removeDragEvents()
  }, [initDragEvents, removeDragEvents])

  return (
    <ImageUploaderContainer>
      <UploadContainer
        ref={dragRef}
        isDragging={isDragging}
        onClick={() => {
          if (!imgInputRef.current) return
          imgInputRef.current.click()
        }}
      >
        <div>
          <UploadIcon />
          <p>파일을 드래그 & 드롭하여 업로드</p>
          <p>jpg, jpeg, png</p>
        </div>
        <input
          ref={imgInputRef}
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          multiple
          onChange={handleChangeImage}
        />
      </UploadContainer>
      <ImagePreviewContainer>
        {images &&
          images.map((image, i) => (
            <ImagePreview key={`image-uploader-${i}`}>
              <Image src={image} alt={`이미지 ${i}`} width={120} height={80} />
              <ImageRemoveIcon
                onClick={() => {
                  const newImages = images.filter((image, index) => index !== i)
                  onChangeImages(newImages)
                }}
              />
            </ImagePreview>
          ))}
      </ImagePreviewContainer>
    </ImageUploaderContainer>
  )
}

export default ImageUploader

const ImageUploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const UploadContainer = styled.div<{ isDragging: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12rem;
  border: 2px dashed ${({ isDragging }) => (isDragging ? color.primary : color.border.default)};
  border-radius: 0.8rem;
  cursor: pointer;
  background-color: ${({ isDragging }) => (isDragging ? color.secondary : '#fff')};

  transition: all 0.2s;

  > div {
    text-align: center;

    p {
      ${typography.caption.medium}
      color: ${color.text.gray}
    }
  }

  input {
    display: none;
  }

  svg {
    fill: ${({ isDragging }) => (isDragging ? color.primary : color.border.default)};
  }
`

const UploadIcon = styled(CloudUploadIcon)`
  width: 40px;
  height: 40px;
  fill: ${color.border.default};
`

const ImagePreviewContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;

  min-height: 40px;
`

const ImagePreview = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${color.border.default};

  img {
    object-fit: cover;
  }
`

const ImageRemoveIcon = styled(CloseIcon)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  padding: 4px;
  box-sizing: content-box;
  fill: ${color.text.gray};
  border-radius: 100px;

  position: absolute;
  top: 4px;
  right: 4px;

  transition: background-color 0.2s;

  :hover {
    background-color: rgba(173, 181, 189, 0.2);
  }
`
