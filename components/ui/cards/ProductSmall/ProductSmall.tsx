import React, { ReactElement, FC } from 'react'
import classes from './ProductSmall.module.css'
import Image from '@/components/ui/Image/Image'

type PropTypes = {
  imgPath: string
  name: string
  price: number
}

const ProductSmall: FC<PropTypes> = (props): ReactElement => {
  const { imgPath, name, price } = props

  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <Image src={imgPath} alt={name || 'Изображение товара'} />
      </div>
      <div className={classes.content}>
        <div className={classes.name}>{name}</div>
        <div className={classes.price}>${price}</div>
      </div>
    </div>
  )
}

export default ProductSmall
