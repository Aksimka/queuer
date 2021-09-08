import React, { FC, ReactElement } from 'react'
import classes from './CardsList.module.css'
import classNames from 'classnames'

interface PropTypes {
  children: JSX.Element | JSX.Element[]
  cardWidth: number
}

const CardsList: FC<PropTypes> = (props): ReactElement => {
  const { children, cardWidth } = props

  const dynamicColStyles = {
    gridTemplateColumns: `repeat(auto-fit, minmax(${cardWidth}px, 1fr))`,
  }

  const childsArray = React.Children.toArray(children)

  return (
    <div className={classNames([classes.List])} style={dynamicColStyles}>
      {childsArray.map((item, index) => {
        return (
          <div className={classes.Item} key={index}>
            {item}
          </div>
        )
      })}
    </div>
  )
}

export default CardsList
