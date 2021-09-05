import React, { ReactElement } from 'react'
import styles from './CardsList.module.css'
import classNames from 'classnames'

interface PropTypes {
  children: JSX.Element | JSX.Element[]
  cardWidth: number
}

export default function CardsList(props: PropTypes): ReactElement {
  const { children, cardWidth } = props

  const dynamicColStyles = {
    gridTemplateColumns: `repeat(auto-fit, minmax(${cardWidth}px, 1fr))`,
  }

  const childsArray = React.Children.toArray(children)

  return (
    <div className={classNames([styles.List])} style={dynamicColStyles}>
      {childsArray.map((item, index) => {
        return (
          <div className={styles.Item} key={index}>
            {item}
          </div>
        )
      })}
    </div>
  )
}
