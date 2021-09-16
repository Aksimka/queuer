import React, { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MenuLayout from '@/layouts/menu'
import classes from '@/styles/pages/QueuePage.module.css'
import classNames from 'classnames'
import Carousel from '@/components/ui/Carousel/Carousel'

export default function Queue(): ReactElement {
  const router = useRouter()
  console.log(router, 'router')

  const onWindowResizedFunc = (): void => {
    if (window.innerWidth <= 768) {
      setOtherImgsWidth(60)
    } else {
      setOtherImgsWidth(120)
    }
  }

  const [mainImage, setMainImage] = useState('')
  const [otherImgsWidth, setOtherImgsWidth] = useState(120)

  useEffect(() => {
    setMainImage('/images/ps5.png')

    window.onresize = onWindowResizedFunc
  }, [])

  const selectImage = (e: string) => {
    setMainImage(e)
  }

  return (
    <MenuLayout>
      <div className={classNames([classes.Wrapper, classes.TwoSidesLayout])}>
        <div className={classes.TwoSidesLayoutLeft}>
          <div className={classes.Images}>
            <div className={classes.ImagesMain}>
              <div className={classes.BigImage}>
                <img
                  src={mainImage}
                  alt="Изображение товара"
                  className={classes.BigImage}
                />
              </div>
            </div>
            <div className={classes.OtherImages}>
              <Carousel
                onImageClick={(e: string) => selectImage(e)}
                imageWidth={otherImgsWidth}
                imagePaths={[
                  '/images/ps5.png',
                  '/images/ps5.png',
                  '/images/imageNotFound.jpg',
                  '/images/ps5.png',
                  '/images/long.png',
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
