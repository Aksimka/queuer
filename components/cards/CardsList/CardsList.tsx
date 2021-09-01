import React, { ReactElement } from 'react'
import styles from './CardsList.module.css'

interface PropTypes {
  children: ReactElement
  cols: number
}

export default function CardsList(props: PropTypes): ReactElement {
  const { children } = props
  const childsArray = React.Children.toArray(children)
  console.log(childsArray)
  return (
    <div className={styles.List}>
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
