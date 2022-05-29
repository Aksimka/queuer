import React, { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MenuLayout from '@/layouts/Menu/menu'
import classes from './styles/QueuePage.module.css'
import classNames from 'classnames'
import Images from './blocks/Images/Images'
import RecentlyViews from './blocks/RecentlyViews/RecentlyViews'
import Description from './blocks/Description/Description'
import HorizontalLine from '@/components/ui/HorizontalLine/HorizontalLine'
import MainLayout from '@/layouts/Main/main'
import Request from '@/request/Request'
import QueueType from '@/types/queue'

export default function Queue(): ReactElement {
  const router = useRouter()

  const [queue, setQueue] = useState<QueueType | null>(null)
  useEffect(() => {
    if (!router.isReady) return
    const queueId = router.query.id ? Number(router.query.id) : undefined
    Request.api.getFullQueue(queueId).then((res) => {
      res && setQueue(res)
    })
  }, [router.isReady, router.query.id])

  if (!queue) return <div>Не найдено</div>

  return (
    <div
      className={classNames([
        classes.Wrapper,
        classes.TwoSidesLayout,
        'container',
      ])}
    >
      <div className={classes.TwoSidesLayoutLeft}>
        <div className={classes.ImagesWrapper}>
          <Images images={queue.images} />
        </div>
        <div className={classes.Separator}>
          <HorizontalLine />
        </div>
        <div className={classes.RecentlyViewsWrapper}>
          <RecentlyViews />
        </div>
      </div>
      <div className={classes.TwoSidesLayoutRight}>
        <div className={classes.Description}>
          <Description />
        </div>
      </div>
    </div>
  )
}

Queue.withLayout = (page: ReactElement) => {
  return (
    <MenuLayout>
      <MainLayout footer=".queuer">{page}</MainLayout>
    </MenuLayout>
  )
}
