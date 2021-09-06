import styles from './CommonCard.module.css'
import EmojiSticker from '../../EmojiSticker/EmojiSticker'
import Image from 'next/image'

import PeopleIcon from '../../icons/People'
import React, {
  forwardRef,
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
  useEffect,
  useState,
} from 'react'
import classNames from 'classnames'
import QueueBadge from '@/types/queues'

interface PropTypes {
  onClick?: (e: React.MouseEvent) => void
  id: number
  name: string
  imagePath: string
  description: string
  peopleCount: number
  badges: QueueBadge[]
}

const CommonCard: ForwardRefExoticComponent<
  PropTypes & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, PropTypes>((props, ref): ReactElement => {
  const {
    onClick = () => undefined,
    name,
    imagePath,
    description,
    peopleCount,
    badges,
  } = props

  const defaultImageSrc = '/images/imageNotFound.jpg'
  const [localImagePath, setImagePath] = useState(defaultImageSrc)

  useEffect(() => {
    setImagePath(imagePath)
  }, [imagePath])

  return (
    <div className={styles.Card} onClick={onClick} ref={ref}>
      <div className={styles.Header}>
        <Image
          src={localImagePath}
          alt="Изображение товара очереди"
          layout="fill"
          objectFit="cover"
          className={styles.HeaderImage}
          onError={() => {
            setImagePath(defaultImageSrc)
          }}
        />
        <div className={styles.HeaderLayout} />
        <div className={styles.HeaderContent}>
          <div className={styles.Stickers}>
            {badges.map((badge, index) => {
              return (
                <div className={styles.Sticker} key={index}>
                  <EmojiSticker>
                    <span>{badge.emoji}</span>
                  </EmojiSticker>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className={styles.Content}>
        <div className={styles.ContentMain}>
          <div className={styles.ContentTitle}>{name}</div>
          <div className={styles.ContentShortDescription}>{description}</div>
        </div>
        <div className={styles.ContentFooter}>
          <div
            className={classNames([styles.ContentFooterTags, 'align-center'])}
          >
            <PeopleIcon size={24} />
            <span>{peopleCount}</span>
          </div>
        </div>
      </div>
    </div>
  )
})

export default CommonCard
