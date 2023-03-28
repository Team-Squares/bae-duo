import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;

    :hover {
      transition: all 0.3s ease-in-out;
      transform: translate(0, -10px);
    }
  }
`
