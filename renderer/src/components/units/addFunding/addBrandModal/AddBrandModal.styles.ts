import styled from '@emotion/styled'
import { color } from '@/src/commons/styles/color'
import { typography } from '@/src/commons/styles/typography'
import CloseIcon from '@mui/icons-material/Close'

export const AddBrandContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    ${typography.caption.light}
    color: ${color.text.gray};
    position: absolute;
    bottom: 8px;
  }
`

export const SettingItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 20px;
  ${typography.body2.medium}
`
export const SettingItemTitle = styled.div`
  width: 84px;
  color: ${color.text.gray};
`
export const SettingItemBody = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
  align-items: center;

  input[type='radio'],
  label {
    cursor: pointer;
  }
`

export const AddImageContainer = styled.div`
  width: 80px;
  height: 80px;
  border: 2px dashed ${color.border.default};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  input {
    display: none;
  }
`

export const ImagePreview = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${color.border.default};

  img {
    object-fit: cover;
  }
`

export const ImageRemoveIcon = styled(CloseIcon)`
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
