import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import MenuLayout from '@/layouts/menu'
import classes from '@/styles/pages/QueuePage.module.css'
import classNames from 'classnames'
import PS5Image from '@/public/images/ps5.png'
import Image from 'next/image'
import Carousel from '@/components/ui/Carousel/Carousel'

export default function Queue(): ReactElement {
  const router = useRouter()
  console.log(router, 'router')
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
            <div className={classes.OtherImages}>
              <Carousel
                imagePaths={[
                  '/images/ps5.png',
                  '/images/ps5.png',
                  '/images/ps5.png',
                  '/images/ps5.png',
                  '/images/ps5.png',
                  '/images/ps5.png',
                ]}
              />
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
