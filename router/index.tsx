import { ReactElement } from 'react'
import Receipt from '@/components/icons/Receipt'
import StoreFront from '@/components/icons/StoreFront'
import FinnTheHuman from '@/components/icons/FinnTheHuman'

export type MenuRoute = {
  name: string
  link: string
  icon?: ReactElement
}

export const MenuRoutes: MenuRoute[] = [
  {
    name: 'Все очереди',
    link: '/queues',
    icon: <Receipt size={28} />,
  },
  {
    name: 'Магазины',
    link: '/shops',
    icon: <StoreFront size={28} />,
  },
  {
    name: 'О нас',
    link: '/about',
    icon: <FinnTheHuman size={28} />,
  },
]
