import { useToast } from '@/src/commons/hooks/useToast'
import * as Styled from '@/src/commons/hooks/useToast/useToast.styles'

const SubListPage = () => {
  const [pushToastQueue, ToastArea] = useToast({ delay: 5000 })

  return (
    <>
      <Styled.TestButtonArea>
        <Styled.TestButton onClick={() => pushToastQueue('success', '성공했습니다.')}>Success</Styled.TestButton>
        <Styled.TestButton onClick={() => pushToastQueue('fail', '실패했습니다.')}>Fail</Styled.TestButton>
        <Styled.TestButton onClick={() => pushToastQueue('warning', '경고문구')}>Warning</Styled.TestButton>
      </Styled.TestButtonArea>
      <ToastArea />
    </>
  )
}

export default SubListPage
