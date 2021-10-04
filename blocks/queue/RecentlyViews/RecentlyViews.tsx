import React, { FC, ReactElement } from 'react'
// import { CarouselImagesProp } from '@/components/ui/Carousel/Carousel'
// import { useRouter } from 'next/router'
import classes from './RecentlyViews.module.css'
import CaretLeft from '@/components/icons/CaretLeft'
import classNames from 'classnames'
import CaretRight from '@/components/icons/CaretRight'

const RecentlyViews: FC = (): ReactElement => {
  // const router = useRouter()

  // const goQueue = (image: CarouselImagesProp): void => {
  //   router.push(`/queues/${image.id}`)
  // }

  return (
    <div className={classes.RecentlyViews}>
      <div className={classes.RecentlyViewsHeader}>
        <div className={classes.RecentlyViewsTitle}>Вы так-же смотрели:</div>
        <div className={classes.Pagination}>
          <div
            className={classNames([classes.PaginationIcon, 'display-center'])}
          >
            <CaretLeft size={22} />
          </div>
          <div
            className={classNames([classes.PaginationIcon, 'display-center'])}
          >
            <CaretRight size={22} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentlyViews
