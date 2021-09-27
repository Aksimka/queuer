import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import MenuLayout from '@/layouts/menu'
import classes from '@/styles/pages/QueuePage.module.css'
import classNames from 'classnames'
import Images from '../../blocks/queue/Images/Images'
import RecentlyViews from '../../blocks/queue/RecentlyViews/RecentlyViews'
import HorizontalLine from '@/components/ui/HorizontalLine/HorizontalLine'
import MainLayout from '@/layouts/main'

export default function Queue(): ReactElement {
  const router = useRouter()
  console.log(router, 'router')

  return (
    <div className={classNames([classes.Wrapper, classes.TwoSidesLayout])}>
      <div className={classes.TwoSidesLayoutLeft}>
        <div className={classes.ImagesWrapper}>
          <Images />
        </div>
        <div className={classes.Separator}>
          <HorizontalLine />
        </div>
        <div className={classes.RecentlyViewsWrapper}>
          <RecentlyViews />
        </div>
      </div>
      <div className={classes.TwoSidesLayoutRight}>
        <div className={classes.Description}>Description</div>
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
