import {ReactElement} from "react";

interface PropTypes {
  opacity?: number
  children?: ReactElement
}

let styles = {
  position: 'absolute' as 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundColor: '#000000',
  opacity: '0.4'
}

export default function BlackoutLayer(props: PropTypes) {
  const {opacity = 30, children} = props

  styles.opacity = `0.${opacity}`

  return (
    <div style={styles}>{children}</div>
  )
}