import styles from './EmojiSticker.module.css'
import { ReactElement, FC } from 'react'

interface PropTypes {
  children: ReactElement
}

const EmojiSticker: FC<PropTypes> = (props) => {
  const { children } = props

  return <div className={styles.Sticker}>{children}</div>
}

export default EmojiSticker
