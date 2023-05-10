import styled from '@emotion/styled'
import { typography } from '@/src/commons/styles/typography'
import { color } from '@/src/commons/styles/styles'
import { colorPalette } from '@/src/commons/styles/color'

export const Container = styled.div`
  width: 100%;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 46px;
  margin-bottom: 48px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${color.$defaultBorder};

  .fundingInfo {
    h2 {
      margin-bottom: 10px;
      ${typography.heading3}
    }
  }

  .fundingSubInfo {
    display: flex;
    gap: 12px;
    align-items: center;

    .fundingDate {
      ${typography.body1.medium}
      color: ${color.$secondaryText};
    }
  }

  .buttonGroup {
    display: flex;
    align-items: center;
    gap: 16px;

    button > span {
      font-size: ${typography.body1.medium};
    }
    button:nth-of-type(1) > span {
      color: ${color.$point};
    }
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;

  button {
    width: 100%;
  }

  button > span {
    font-size: ${typography.body1.medium};
  }
`

export const FundingInfoList = styled.div`
  flex: 1;
  width: calc((100% - 40px) / 2);

  .fundingImg {
    width: 100%;
    height: 190px;
    margin-bottom: 24px;
    background-color: ${color.$defaultGray};
    border-radius: 20px;
  }
`

export const FundingInfoItem = styled.div`
  padding: 26px 43px;
  border-radius: 20px;
  background-color: ${color.$secondaryBg};

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;

    span {
      ${typography.caption.medium};
      color: ${color.$primaryText};
    }
  }

  .value {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;

    span {
      ${typography.heading4};
      color: ${color.$primaryText};
    }
  }

  .progressBar {
    width: 100%;
    height: 14px;
    border-radius: 50px;
    background-color: white;

    .progressValue {
      background-color: ${color.$point};
      height: 100%;
      border-radius: 50px;
    }
  }

  & + & {
    margin-top: 24px;
  }
`

export const AttendantInfo = styled.div`
  flex: 1;
  width: calc((100% - 40px) / 2);

  .title {
    ${typography.heading4}
    margin-bottom: 24px;
  }

  .inputGroup {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
    div:nth-of-type(1) {
      width: calc((100% - 16px) / 2);
    }
    div:nth-of-type(2) {
      width: calc((100% - 16px) / 2);
    }
  }

  button > span {
    color: ${colorPalette.gray.gray30};
  }
`

export const MenuContainer = styled.div`
  width: 100%;
  margin-top: 32px;

  .userInfo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;

    .img {
      width: 36px;
      height: 36px;
      background-color: ${color.$defaultGray};
      border-radius: 50px;
    }

    .userName {
      ${typography.body1.bold}
      color: ${color.$primaryText};
    }
  }

  .menuGroup {
    padding: 20px;
    border: 1px solid ${color.$defaultBorder};
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .menuName {
      color: ${color.$primaryText};
      ${typography.body1.bold};
      margin-bottom: 3x;
    }

    .menuDesc {
      color: ${color.$secondaryText};
      ${typography.body2.light};
      margin-bottom: 5px;
    }

    .menuPrice {
      color: ${color.$secondaryText};
      ${typography.body2.medium};
    }

    .menuItemInfo {
    }

    svg {
      font-size: 20px;
      cursor: pointer;
    }
  }

  .menuItem {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .menuItem + .menuItem {
    border-top: 1px solid ${color.$defaultGray};
    padding-top: 16px;
  }
`

export const BillInfo = styled.div`
  flex: 1;
  width: calc((100% - 40px) / 2);

  .title {
    ${typography.heading4}
    margin-bottom: 24px;
  }

  .billContainer {
    border: 1px dashed ${color.$defaultBorder};
    padding: 10px 40px 40px 40px;
    border-radius: 20px;
  }

  .attendantInfo {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 30px 0;
  }

  .attendantInfo + .attendantInfo {
    border-top: 1px solid ${color.$defaultBorder};
  }

  .userInfo {
    width: calc(100% / 3);
    margin-right: 20px;
    display: flex;
    align-items: center;
    gap: 10px;

    .userName {
      ${typography.body1.bold}
    }
  }

  .menuList {
    width: calc((100% / 3) * 2 - 20px);
  }
  .menuInfo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${typography.body2.medium}
  }

  .img {
    width: 36px;
    height: 36px;
    background-color: ${color.$defaultGray};
    border-radius: 50px;
  }

  .billInfoContainer {
    border-top: 1px dashed ${color.$defaultBorder};
    border-bottom: 1px dashed ${color.$defaultBorder};
    padding-bottom: 30px;
  }

  .billInfoGroup {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    .billTitle {
      ${typography.body2.medium}
    }
  }

  .price {
    display: flex;
    align-items: center;
    gap: 10px;

    input {
      padding: 5px 14px;
    }
  }

  .totalPrice {
    color: ${color.$point};
    ${typography.body1.bold}
  }

  .billInfoGroup.total {
    margin-top: 30px;
  }

  .accountInfoContainer {
    margin-top: 20px;
    p {
      ${typography.caption.light}
    }
  }

  .accountGroup {
    display: flex;
    gap: 20px;
    margin-top: 10px;

    input {
      font-size: 14px;
    }

    label {
      ${typography.caption.light}
      color: ${color.$secondaryText};
    }
  }
`

export const FunidngMenuContainer = styled.section`
  height: 420px;
  width: 100%;
  padding-bottom: 20px;
  img {
    height: 360px;
    object-fit: contain;
  }
`
