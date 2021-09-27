import React, { FC, ReactElement } from 'react'

type PropTypes = {
  height?: number
  color?: string
}

const HorizontalLine: FC<PropTypes> = (props): ReactElement => {
  const { height, color } = props
  const computedStyles = {
    height: `${height || 2}px`,
    backgroundColor: color || '#e4e4e4',
  }
  return <div style={computedStyles} />
}

export default HorizontalLine
