import { FC, ReactElement } from 'react'

interface PropTypes {
  opacity?: number
  children?: ReactElement
}

type Absolute = 'absolute'

const styles = {
  position: 'absolute' as Absolute,
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundColor: '#000000',
  opacity: '0.4',
}

const BlackoutLayer: FC<PropTypes> = (props): ReactElement => {
  const { opacity = 30, children } = props

  styles.opacity = `0.${opacity}`

  return <div style={styles}>{children}</div>
}

export default BlackoutLayer
