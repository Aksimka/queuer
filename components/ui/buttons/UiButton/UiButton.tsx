import React, { FC, PropsWithChildren } from 'react'
import CommonButton, {
  CommonButtonPropTypes,
} from '@/components/ui/buttons/CommonButton/CommonButton'

import classes from './UiButton.module.css'

type ButtonModes = 'primary' | 'secondary' | 'success' | 'danger' | 'warning'

interface PropTypes extends CommonButtonPropTypes {
  mode?: ButtonModes
}

const UiButton: FC<PropsWithChildren<PropTypes>> = (props) => {
  const { mode = 'secondary', ...rest } = props

  const lightTextModes = ['secondary']

  const genColorStyle = {
    backgroundColor: `var(--color-${mode})`,
    color: lightTextModes.includes(mode) ? '#000000' : '#ffffff',
  }

  return (
    <div className={classes.Button}>
      <CommonButton {...rest} customStyles={genColorStyle} />
    </div>
  )
}

export default UiButton
