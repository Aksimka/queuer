import React, { ReactElement, FC, ImgHTMLAttributes } from 'react'
import classes from './Image.module.css'

const Image: FC<ImgHTMLAttributes<Element>> = (props): ReactElement => {
  const { src, alt = 'Изображение', ...other } = props
  return (
    <div className={classes.wrapper}>
      <img src={src} alt={alt} {...other} className={classes.img} />
    </div>
  )
}

export default Image
