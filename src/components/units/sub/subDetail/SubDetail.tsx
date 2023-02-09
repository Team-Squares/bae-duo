import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as Styled from './SubDetail.styles'

const SubDetail = () => {
  const [type, setType] = useState('짝수')
  const {
    query: { subName },
  } = useRouter()

  useEffect(() => {
    Number(subName) % 2 === 0 ? setType('짝수') : setType('홀수')
  }, [subName])

  return (
    <Styled.Container>
      {subName}
      <Styled.ExplainText type={type} size={Number(subName)}>
        {type}
      </Styled.ExplainText>
    </Styled.Container>
  )
}

export default SubDetail
