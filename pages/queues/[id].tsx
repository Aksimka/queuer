import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import MenuLayout from '@/layouts/menu'
import styles from '@/styles/pages/QueuePage.module.css'
import classNames from 'classnames'
import PS5Image from '@/public/images/ps5.png'
import Image from 'next/image'

export default function Queue(): ReactElement {
  const router = useRouter()
  console.log(router, 'router')
  // const { id } = router.query
  return (
    <MenuLayout>
      <div className={classNames([styles.Wrapper, styles.TwoSidesLayout])}>
        <div className={styles.TwoSidesLayoutLeft}>
          <div className={styles.Images}>
            <div className={styles.ImagesMain}>
              <div className={styles.BigImage}>
                <Image
                  src={PS5Image}
                  alt="Изображение товара"
                  layout="responsive"
                  objectFit="cover"
                  className={styles.HeaderImage}
                />
              </div>
            </div>
            <div className={styles.ImagesOther}>
              <div
                className={classNames([styles.ScrollBlock, 'display-center'])}
              >
                B
              </div>
              <div className={styles.ImagesStack}>
                <div className={styles.SmallImage}>
                  <Image
                    src={PS5Image}
                    alt="Изображение товара"
                    className={styles.HeaderImage}
                  />
                </div>
                <div className={styles.SmallImage}>
                  <Image
                    src={PS5Image}
                    alt="Изображение товара"
                    className={styles.HeaderImage}
                  />
                </div>
                <div className={styles.SmallImage}>
                  <Image
                    src={PS5Image}
                    alt="Изображение товара"
                    className={styles.HeaderImage}
                  />
                </div>
                <div className={styles.SmallImage}>
                  <Image
                    src={PS5Image}
                    alt="Изображение товара"
                    className={styles.HeaderImage}
                  />
                </div>
                <div className={styles.SmallImage}>
                  <Image
                    src={PS5Image}
                    alt="Изображение товара"
                    className={styles.HeaderImage}
                  />
                </div>
                <div className={styles.SmallImage}>
                  <Image
                    src={PS5Image}
                    alt="Изображение товара"
                    className={styles.HeaderImage}
                  />
                </div>
              </div>
              <div
                className={classNames([styles.ScrollBlock, 'display-center'])}
              >
                N
              </div>
            </div>
          </div>
        </div>
        <div className={styles.TwoSidesLayoutRight}>
          <div className={styles.Description}>Description</div>
        </div>
      </div>
    </MenuLayout>
  )
}
