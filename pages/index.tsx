import styles from '../styles/Home.module.css'
import { ReactElement, useEffect } from 'react'
import { useRouter } from 'next/router'
import MenuLayout from '@/layouts/menu'
import MainLayout from '@/layouts/main'

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
