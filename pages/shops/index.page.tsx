import { ReactElement } from 'react'
import MenuLayout from '@/layouts/Menu/menu'
import MainLayout from '@/layouts/Main/main'

export default function Shops(): ReactElement {
  return <div>shops page</div>
}

Shops.withLayout = (page: ReactElement) => {
  return (
    <MenuLayout>
      <MainLayout customHeadingBlock={<div>Все магазины</div>} footer="footer">
        {page}
      </MainLayout>
    </MenuLayout>
  )
}
