import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deleteSubData, getSubDataDetail, postSubData } from '@/src/commons/api/subApi'
import * as Styled from './SubDetail.styles'

const SubDetail = () => {
  const queryClient = useQueryClient()
  const {
    query: { subName },
  } = useRouter()
  const id = subName && +subName

  const [type, setType] = useState<string>('짝수')
  const [inputData, setInputData] = useState<string>('')
  useEffect(() => {
    Number(subName) % 2 === 0 ? setType('짝수') : setType('홀수')
  }, [subName])

  //* useQuery - get 요청에 해당
  const { data } = useQuery(['getSubDataItemKey', id], () => getSubDataDetail(id as number), {
    enabled: !!subName,
    retry: 3,
  })

  //* useMutation - post,put,delete 요청에 해당
  const addMutation = useMutation(postSubData, {
    onSuccess: () => {
      setInputData('')
      return queryClient.invalidateQueries('getSubDataItemKey')
    },
    onError: error => {
      console.dir(error)
    },
    onSettled: () => {
      alert('성공하든 실패하든 UI 먼저 보여줌. 예를들면 페이스북 따봉이 있음.')
    },
  })
  //제출
  const handleSubmitSample = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      addMutation.mutate({ id: id as number, inputData })
    },
    [addMutation, id, inputData]
  )
  //삭제
  const handleDeleteSample = useMutation(deleteSubData, {
    onSuccess: () => queryClient.invalidateQueries('getSubDataItemKey'),
    onError: error => {
      console.dir(error)
    },
  })
  return (
    <Styled.Container>
      {subName}
      <Styled.ExplainText type={type} size={Number(subName)}>
        {type}
      </Styled.ExplainText>
      <form onSubmit={handleSubmitSample}>
        <input onChange={e => setInputData(e.target.value)} />
        <button type="submit">제출테스트폼</button>
      </form>
      <button type="button" onClick={() => handleDeleteSample.mutate(Number(id))}>
        ❌
      </button>
    </Styled.Container>
  )
}

export default SubDetail
