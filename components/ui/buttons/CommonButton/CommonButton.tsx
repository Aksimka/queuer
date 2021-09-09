import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import classes from './CommonButton.module.css'
import classNames from 'classnames'

interface PropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
  textColor?: string
}

const CommonButton: FC<PropsWithChildren<PropTypes>> = (props) => {
  const { color, children, textColor, ...rest } = props

  const styles = {
    color: textColor || '#000000',
    backgroundColor: color || '#e4e4e4',
  }

  return (
    <button
      className={classNames([classes.Button, 'standard-shadow'])}
      style={styles}
      {...rest}
    >
      {children && children}
    </button>
  )
}

export default CommonButton
