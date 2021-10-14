import React, { FC, ReactElement } from 'react'
// import { CarouselImagesProp } from '@/components/ui/Carousel/Carousel'
// import { useRouter } from 'next/router'
import classes from './RecentlyViews.module.css'
import CaretLeft from '@/components/icons/CaretLeft'
import classNames from 'classnames'
import CaretRight from '@/components/icons/CaretRight'
import ProductSmall from '@/components/ui/cards/ProductSmall/ProductSmall'
// import UiStaticPagination from '../../../utils/pagination/UiStaticPagination'

import imagesArray from './imagesArray'

// type RecentlyItem

const RecentlyViews: FC = (): ReactElement => {
  // const router = useRouter()

  // const goQueue = (image: CarouselImagesProp): void => {
  //   router.push(`/queues/${image.id}`)
  // }

  // const pagination = new UiStaticPagination({items: imagesArray})

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>Вы так-же смотрели:</div>
        <div className={classes.pagination}>
          <div
            className={classNames([classes.paginationIcon, 'display-center'])}
          >
            <CaretLeft size={22} />
          </div>
          <div
            className={classNames([classes.paginationIcon, 'display-center'])}
          >
            <CaretRight size={22} />
          </div>
        </div>
      </div>
      <div className={classes.items}>
        {imagesArray.map((image) => {
          return (
            <div className={classes.itemWrapper} key={image.id}>
              <ProductSmall
                imgPath={image.path}
                name={image.name}
                price={image.price}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecentlyViews
