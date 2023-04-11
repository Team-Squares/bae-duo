import styled from '@emotion/styled'
import React, { useRef, useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'
import { color } from '@/src/commons/styles/color'

interface ImageUploaderProps {
  images: string[]
  setImages: React.Dispatch<React.SetStateAction<string[]>>
}

const ImageUploader = ({ images, setImages }: ImageUploaderProps) => {
  const imgInputRef = useRef<HTMLInputElement | null>(null)

  const handleChangeImage = (e: React.ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList
    const targetFilesArray = Array.from(targetFiles)
    const selectedFiles: string[] = targetFilesArray.map(file => {
      return URL.createObjectURL(file)
    })
    setImages(prev => [...prev, ...selectedFiles])
  }

  return (
    <ImageUploaderContainer>
      <UploadContainer
        onClick={() => {
          if (!imgInputRef.current) return
          imgInputRef.current.click()
        }}
      >
        <UploadIcon />
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
                  setImages(prevImages => prevImages.filter((prevImage, prevImageIndex) => prevImageIndex !== i))
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

const UploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  border: 2px dashed ${color.border.default};
  border-radius: 8px;
  cursor: pointer;

  input {
    display: none;
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
  fill: ${color.text.gray};

  position: absolute;
  top: 4px;
  right: 4px;
`
