import { useRouter } from 'next/router'

const useRoutePage = () => {
  const router = useRouter()
  const routePage = (page: string) => router.push(page)

  return {
    routePage,
  }
}

export default useRoutePage
