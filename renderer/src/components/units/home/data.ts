export const categoryName = ['전체', '진행 중', '완료']

export const tagByStatus = (status: number) => {
  switch (status) {
    case 1:
      return { color: '#4263EB', background: '#F5F7FE' }
    case 2:
      return { color: '#DC2626', background: '#FEF2F2' }
    case 3:
      return { color: '#45B9C4', background: '#E0F5F6' }
  }
}
export const getKORMoneyString = (money: number) => {
  return money.toLocaleString('ko-KR', {
    currency: 'KRW',
  })
}

export const getPercentage = (numerator: number, denominator: number) => {
  return Math.floor((numerator / denominator) * 100)
}
