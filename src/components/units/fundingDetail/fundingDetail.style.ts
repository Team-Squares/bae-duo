import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;

  .fundingInfo {
    h2 {
      margin-bottom: 10px;
    }
  }

  .fundingSubInfo {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .buttonGroup {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`
