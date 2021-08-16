import styles from './EmojiSticker.module.css'
import {ReactElement} from "react";

interface PropTypes {
  children: ReactElement
}

export default function EmojiSticker(props: PropTypes) {

  const { children } = props

  return (
    <div className={styles.Sticker}>{children}</div>
  )
}