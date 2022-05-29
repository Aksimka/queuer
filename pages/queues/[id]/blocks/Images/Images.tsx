import React, { FC, ReactElement, useEffect, useState } from 'react'
import classes from './Images.module.css'
import classNames from 'classnames'

type PropTypes = {
  images: string[]
}

const Images: FC<PropTypes> = (props): ReactElement => {
  const { images } = props

  const [mainImage, setMainImage] = useState('')

  useEffect(() => {
    setMainImage(images[0])
  }, [images])

  const selectImage = (e: string) => {
    setMainImage(e)
  }

  return (
    <div className={classes.Images}>
      <div className={classes.ImagesMain}>
        <img
          src={mainImage}
          alt="Изображение товара"
          className={classNames([classes.BigImage, 'standard-shadow'])}
        />
      </div>
      <div className={classes.OtherImages}>
        {images.map((item, index) => {
          return (
            <div
              className={classes.OtherImage}
              key={index}
              onClick={() => selectImage(item)}
            >
              <div className={classes.OtherImageLayer} />
              <img src={item} alt="Изображение товара" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Images
