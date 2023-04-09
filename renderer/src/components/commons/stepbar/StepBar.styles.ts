import { color } from '@/src/commons/styles/color'
import { typography } from '@/src/commons/styles/typography'
import styled from '@emotion/styled'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

export const StepBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StepItem = styled.div<{ isActive: boolean; cursor?: string }>`
  padding: 8px 20px 8px 16px;

  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid ${({ isActive }) => (isActive ? color.primary : color.border.default)};
  border-radius: 100px;

  background-color: ${({ isActive }) => isActive && color.secondary};
  cursor: ${({ cursor }) => cursor || 'auto'};
  ${typography.body2.medium}

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ isActive }) => (isActive ? color.primary : color.text.gray)};
  }

  span {
    color: ${({ isActive }) => (isActive ? color.primary : color.text.gray)};
  }
`

export const RightArrowIcon = styled(KeyboardArrowRight)`
  /* margin: 0 20px; */
  svg {
    width: 24px;
    height: 24px;
  }
  path {
    fill: ${color.text.gray};
  }
`

export const CheckIcon = styled(CheckCircleOutlineIcon)`
  svg {
    width: 20px;
    height: 20px;
    fill: ${color.primary} !important;
  }
  path {
    fill: ${color.primary} !important;
  }
`
