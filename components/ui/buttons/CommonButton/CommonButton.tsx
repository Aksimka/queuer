import React, {
  ButtonHTMLAttributes,
  CSSProperties,
  FC,
  PropsWithChildren,
} from 'react'
import classes from './CommonButton.module.css'
import classNames from 'classnames'

export interface CommonButtonPropTypes
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
  textColor?: string
  customStyles?: CSSProperties
}

const CommonButton: FC<PropsWithChildren<CommonButtonPropTypes>> = (props) => {
  const { color, children, textColor, customStyles, ...rest } = props

  const styles = customStyles || {
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
