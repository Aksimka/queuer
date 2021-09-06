// empty page with redirect. See next.config.js

import { ReactElement, useEffect } from 'react'
import { useRouter } from 'next/router'
import MenuLayout from '@/layouts/menu'

export default function Index(): ReactElement {
  const router = useRouter()
  useEffect(() => {
    router.push('/queues')
  })
  return <></>
}

Index.withLayout = (page: ReactElement) => {
  return <MenuLayout>{page}</MenuLayout>
}
