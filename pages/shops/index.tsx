import { ReactElement } from 'react'
import MenuLayout from '@/layouts/menu'
import MainLayout from '@/layouts/main'

export default function Shops(): ReactElement {
  return <div>shops page</div>
}

Shops.withLayout = (page: ReactElement) => {
  return (
    <MenuLayout>
      <MainLayout heading="Все магазины" footer="footer">
        {page}
      </MainLayout>
    </MenuLayout>
  )
}
