import React, { FC, ReactElement, useEffect, useState } from 'react'
import classes from './Images.module.css'
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

  const [mainImage, setMainImage] = useState('')

  useEffect(() => {
    setMainImage(images[0].path)
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
        {images.map((item) => {
          return (
            <div
              className={classes.OtherImage}
              key={item.id}
              onClick={() => selectImage(item.path)}
            >
              <div className={classes.OtherImageLayer} />
              <img src={item.path} alt="Изображение товара" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Images
