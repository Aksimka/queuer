import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import MenuLayout from '@/layouts/menu'
import classes from '@/styles/pages/QueuePage.module.css'
import classNames from 'classnames'
import PS5Image from '@/public/images/ps5.png'
import Image from 'next/image'

export default function Queue(): ReactElement {
  const router = useRouter()
  console.log(router, 'router')
  // const { id } = router.query
  return (
    <MenuLayout>
      <div className={classNames([classes.Wrapper, classes.TwoSidesLayout])}>
        <div className={classes.TwoSidesLayoutLeft}>
          <div className={classes.Images}>
            <div className={classes.ImagesMain}>
              <div className={classes.BigImage}>
                <Image
                  src={PS5Image}
                  alt="Изображение товара"
                  layout="responsive"
                  objectFit="cover"
                  className={classes.HeaderImage}
                />
              </div>
            </div>
            <div className={classes.ImagesOther}>
              <div
                className={classNames([classes.ScrollBlock, 'display-center'])}
              >
                B
              </div>
              <div className={classes.ImagesStack}>
                <div className={classes.SmallImage}>
                  <Image
                    src={PS5Image}
                    alt="Изображение товара"
                    className={classes.HeaderImage}
                  />
                </div>
                <div className={classes.SmallImage}>
                  <Image
                    src={PS5Image}
                    alt="Изображение товара"
                    className={classes.HeaderImage}
                  />
                </div>
                <div className={classes.SmallImage}>
                  <Image
                    src={PS5Image}
                    alt="Изображение товара"
                    className={classes.HeaderImage}
                  />
                </div>
                <div className={classes.SmallImage}>
                  <Image
                    src={PS5Image}
                    alt="Изображение товара"
                    className={classes.HeaderImage}
                  />
                </div>
                <div className={classes.SmallImage}>
                  <Image
                    src={PS5Image}
                    alt="Изображение товара"
                    className={classes.HeaderImage}
                  />
                </div>
                <div className={classes.SmallImage}>
                  <Image
                    src={PS5Image}
                    alt="Изображение товара"
                    className={classes.HeaderImage}
                  />
                </div>
              </div>
              <div
                className={classNames([classes.ScrollBlock, 'display-center'])}
              >
                N
              </div>
            </div>
          </div>
        </div>
        <div className={classes.TwoSidesLayoutRight}>
          <div className={classes.Description}>Description</div>
        </div>
      </div>
    </MenuLayout>
  )
}
