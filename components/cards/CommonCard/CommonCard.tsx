import styles from './CommonCard.module.css'
import EmojiSticker from '../../EmojiSticker/EmojiSticker'
import Image from 'next/image'
import PS5Image from '@/public/img/ps5.png'

import PeopleIcon from '../../icons/People'
import { ReactElement } from 'react'
import classNames from 'classnames'

export default function CommonCard(): ReactElement {
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
        <div className={styles.HeaderLayout} />
        <div className={styles.HeaderContent}>
          <div className={styles.Stickers}>
            <div className={styles.Sticker}>
              <EmojiSticker>
                <span>👕</span>
              </EmojiSticker>
            </div>
            <div className={styles.Sticker}>
              <EmojiSticker>
                <span>👕</span>
              </EmojiSticker>
            </div>
            <div className={styles.Sticker}>
              <EmojiSticker>
                <span>👕</span>
              </EmojiSticker>
            </div>
            <div className={styles.Sticker}>
              <EmojiSticker>
                <span>👕</span>
              </EmojiSticker>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Content}>
        <div className={styles.ContentMain}>
          <div className={styles.ContentTitle}>Sony Playstation 5</div>
          <div className={styles.ContentShortDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            delectus expedita illo laudantium magni minus neque nisi placeat
            quasi sed, voluptatem voluptatibus voluptatum. Accusantium ad
            aperiam architecto blanditiis deleniti dolor doloribus eligendi et
            ipsam, iusto maxime, minima nemo odit, placeat quaerat quam
            quibusdam quod repellendus soluta ullam unde voluptates
            voluptatibus!
          </div>
        </div>
        <div className={styles.ContentFooter}>
          <div
            className={classNames([styles.ContentFooterTags, 'align-center'])}
          >
            <PeopleIcon size={24} />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  )
}
