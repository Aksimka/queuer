import React, { FC, ReactElement, useEffect, useState } from 'react'
import classes from './Images.module.css'
import Carousel, { CarouselImagesProp } from '@/components/ui/Carousel/Carousel'
import imagesArray from './imagesArray'
import classNames from 'classnames'

const Images: FC = (): ReactElement => {
  const onWindowResizedFunc = (): void => {
    if (window.innerWidth <= 768) {
      setOtherImgsWidth(60)
    } else {
      setOtherImgsWidth(120)
    }
  }

  const [mainImage, setMainImage] = useState('')
  const [otherImgsWidth, setOtherImgsWidth] = useState(120)

  useEffect(() => {
    setMainImage('/images/ps5.png')

    window.onresize = onWindowResizedFunc
  }, [])

  const selectImage = (e: string) => {
    setMainImage(e)
  }

  return (
    <div className={classes.Images}>
      <div className={classes.ImagesMain}>
        <div className={classNames([classes.BigImage, 'standard-shadow'])}>
          <img
            src={mainImage}
            alt="Изображение товара"
            className={classes.BigImage}
          />
        </div>
      </div>
      <div className={classes.OtherImages}>
        <Carousel
          onImageClick={(e: CarouselImagesProp) => selectImage(e.path)}
          imageWidth={otherImgsWidth}
          images={imagesArray}
        />
      </div>
    </div>
  )
}

export default Images
