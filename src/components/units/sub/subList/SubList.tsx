import { withAuth } from '@/src/components/commons/hocs/withAuth'
import useRoutePage from '@/src/commons/hooks/useRoutePage'
import * as Styled from './SubList.styles'
import { useQuery } from 'react-query'
import { getSubDataList } from '@/src/commons/api/subApi'

const SubList = () => {
  const { routePage } = useRoutePage()
  //TODO 예시 - get요청을 위한 useQuery를 이용하여 데이터 가져오기
  //* 파라미터로 전달할 값이 없더라도 쿼리키의 값은 무조건 string[] 형태로 가져와주세요!
  //const { data } = useQuery(['getSubDataListKey'], () => getSubDataList())

  return (
    <Styled.Container>
      {Array.from({ length: 5 }).map((el: any, idx) => (
        <div key={idx} onClick={() => routePage(`/sub/${idx}`)}>
          {idx}
        </div>
      ))}
    </Styled.Container>
  )
}

export default withAuth(SubList)
