import { FC, ReactElement } from 'react'
import classes from './Description.module.css'

const Description: FC = (): ReactElement => {
  return (
    <div className={classes.description}>
      <div className={classes.title}>Playstation 5</div>
    </div>
  )
}

export default Description
