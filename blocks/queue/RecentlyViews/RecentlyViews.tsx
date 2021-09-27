import React, { FC, ReactElement } from 'react'
import Carousel, { CarouselImagesProp } from '@/components/ui/Carousel/Carousel'
import imagesArray from './imagesArray'
import { useRouter } from 'next/router'
import classes from './RecentlyViews.module.css'

const RecentlyViews: FC = (): ReactElement => {
  const router = useRouter()

  const goQueue = (image: CarouselImagesProp): void => {
    router.push(`/queues/${image.id}`)
  }

  return (
    <div className={classes.RecentlyViews}>
      <div className={classes.RecentlyViewsTitle}>Вы так-же смотрели:</div>
      <Carousel
        onImageClick={(image: CarouselImagesProp) => goQueue(image)}
        imageWidth={240}
        images={imagesArray}
      />
    </div>
  )
}

export default RecentlyViews
