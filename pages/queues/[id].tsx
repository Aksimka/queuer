import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import MenuLayout from '@/layouts/menu'
import MainLayout from '@/layouts/main'

export default function Queue(): ReactElement {
  const router = useRouter()
  console.log(router, 'routerr')
  const { id } = router.query
  return (
    <MenuLayout>
      <MainLayout heading={`${id}`} footer="footer">
        <div>{id}</div>
      </MainLayout>
    </MenuLayout>
  )
}
