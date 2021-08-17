import styles from './CommonCard.module.css'
import EmojiSticker from "../../EmojiSticker/EmojiSticker"
import Image from 'next/image'
import PS5Image from '@/public/img/ps5.png'
import PeopleIcon from "../../icons/People";

export default function CommonCard() {
  return (
    <div className={styles.Card}>
      <div className={styles.Header}>
        <Image
          src={PS5Image}
          alt="Изображение товара очереди"
          layout="fill"
          objectFit="cover"
          className={styles.HeaderImage}
        />
        <div className={styles.HeaderLayout}/>
        <div className={styles.HeaderContent}>
          <div className={styles.Stickers}>
            <div className={styles.Sticker}>
              <EmojiSticker>
                <span>👕</span>
              </EmojiSticker>
            </div>
          </div>
          <div className={styles.HeaderInfo}>
            <span className="align-center">
              <PeopleIcon color={'#ffffff'} fill={'#ffffff'} />
              <span style={{marginLeft: '8px'}}>0</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.Content}>
        card content
      </div>
    </div>
  )
}