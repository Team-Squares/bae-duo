import { useToast } from '@/src/commons/hooks/useToast'
import * as Styled from '@/src/commons/hooks/useToast/useToast.styles'
import { useRecoilState } from 'recoil'
import { test } from '@/src/commons/atom/atom'

const SubListPage = () => {
  const [pushToastQueue, ToastArea] = useToast({ delay: 5000 })
  const [tester, setTester] = useRecoilState(test)

  return (
    <>
      <Styled.TestButtonArea>
        <div>hi : {tester}</div>
        <button onClick={() => setTester(tester + 1)}>counter!</button>
        <Styled.TestButton onClick={() => pushToastQueue('success', '성공했습니다.')}>Success</Styled.TestButton>
        <Styled.TestButton onClick={() => pushToastQueue('fail', '실패했습니다.')}>Fail</Styled.TestButton>
        <Styled.TestButton onClick={() => pushToastQueue('warning', '경고문구')}>Warning</Styled.TestButton>
      </Styled.TestButtonArea>
      <ToastArea />
    </>
  )
}

export default SubListPage
