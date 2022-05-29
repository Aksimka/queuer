import Link from 'next/link'
import { ReactElement } from 'react'
import MenuLayout from '@/layouts/Menu/menu'

export default function About() {
  return (
    <div>
      <div>about page</div>
      <Link href="/">back</Link>
    </div>
  )
}

About.withLayout = (page: ReactElement) => {
  return <MenuLayout>{page}</MenuLayout>
}
