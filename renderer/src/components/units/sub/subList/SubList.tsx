import { withAuth } from '@/src/components/commons/hocs/withAuth'
import { useQuery } from 'react-query'
import { getSubDataList } from '@/src/commons/api/subApi'
import useRoutePage from '@/src/commons/hooks/useRoutePage'
import * as Styled from './SubList.styles'
import { useSetRecoilState } from 'recoil'
import { useToast } from '@/src/commons/hooks/useToast'
import { toastArray } from '@/src/commons/atom/atom'

const SubList = () => {
  const { routePage } = useRoutePage()
  //TODO 예시 - get요청을 위한 useQuery를 이용하여 데이터 가져오기
  //* 파라미터로 전달할 값이 없더라도 쿼리키의 값은 무조건 string[] 형태로 가져와주세요!

  //const { data } = useQuery(['getSubDataListKey'], () => getSubDataList())
  const { pushToastQueue } = useToast()
  const setToastQueue = useSetRecoilState(toastArray)

  return (
    <Styled.Container>
      {Array.from({ length: 5 }).map((el: any, idx) => (
        <div key={idx} onClick={() => routePage(`/sub/${idx}`)}>
          {idx}
        </div>
      ))}
      <button onClick={() => pushToastQueue('fail', '실패했습니다.', setToastQueue)}>Fail</button>
    </Styled.Container>
  )
}

export default withAuth(SubList)
