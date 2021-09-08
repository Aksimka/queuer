export type MenuRoute = {
  name: string
  link: string
}

export const MenuRoutes: MenuRoute[] = [
  {
    name: 'Все очереди',
    link: '/queues',
  },
  {
    name: 'Магазины',
    link: '/shops',
  },
  {
    name: 'О нас',
    link: '/about',
  },
]
