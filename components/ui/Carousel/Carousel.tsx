import React, { FC, ReactElement } from 'react'
import classes from './Carousel.module.css'
import classNames from 'classnames'
import CaretLeft from '@/components/icons/CaretLeft'
import CaretRight from '@/components/icons/CaretRight'

type PropTypes = {
  imagePaths: string[]
  width?: number
  height?: number
}

const Carousel: FC<PropTypes> = (props): ReactElement => {
  const { imagePaths } = props

  return (
    <div className={classes.Carousel}>
      <div className={classNames([classes.ScrollBlock, 'display-center'])}>
        <CaretLeft />
      </div>
      <div className={classes.ScrollableContent}>
        {imagePaths.map((path, index) => {
          return (
            <div className={classes.ImageWrapper} key={index}>
              <img
                src={path}
                alt="Изображение товара"
                className={classes.Image}
              />
            </div>
          )
        })}
      </div>
      <div className={classNames([classes.ScrollBlock, 'display-center'])}>
        <CaretRight />
      </div>
    </div>
  )
}

export default Carousel
