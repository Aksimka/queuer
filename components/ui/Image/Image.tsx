import React, { ReactElement, FC, ImgHTMLAttributes } from 'react'
import classes from './Image.module.css'

const Image: FC<ImgHTMLAttributes<Element>> = (props): ReactElement => {
  const { src, alt = 'Изображение', ...other } = props
  return (
    <div className={classes.Wrapper}>
      <img src={src} alt={alt} {...other} />
    </div>
  )
}

export default Image
