import { withAuth } from '@/src/components/commons/hocs/withAuth'
import useRoutePage from '@/src/commons/hooks/useRoutePage'
import * as Styled from './SubList.styles'

const SubList = () => {
  const { routePage } = useRoutePage()
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
