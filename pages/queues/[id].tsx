import React, { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MenuLayout from '@/layouts/menu'
import classes from '@/styles/pages/QueuePage.module.css'
import classNames from 'classnames'
import Images from '../../blocks/queue/Images/Images'
import RecentlyViews from '../../blocks/queue/RecentlyViews/RecentlyViews'
import HorizontalLine from '@/components/ui/HorizontalLine/HorizontalLine'
import MainLayout from '@/layouts/main'
import Description from '../../blocks/queue/Description/Description'
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
