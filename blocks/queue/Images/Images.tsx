import React, { FC, ReactElement, useEffect, useState } from 'react'
import classes from './Images.module.css'
import Carousel, { CarouselImagesProp } from '@/components/ui/Carousel/Carousel'
import imagesArray from './imagesArray'
import classNames from 'classnames'

type ImageProp = {
  id: number
  path: string
}

type PropTypes = {
  images: ImageProp[]
}

const Images: FC<PropTypes> = (props): ReactElement => {
  const { images } = props
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
        {images.map((item) => {
          return (
            <div className={classes.OtherImage} key={item.id}>
              <img src={item.path} alt="Изображение товара" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Images
