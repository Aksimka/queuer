import React, { FC, ReactElement, useEffect, useState } from 'react'
import classes from './Avatar.module.css'
import Image from 'next/image'
import classNames from 'classnames'

type PropTypes = {
  imagePath?: string
}

const Avatar: FC<PropTypes> = (props): ReactElement => {
  const { imagePath } = props
  const defaultUserImageSrc = '/images/user.jpeg'
  const [localImagePath, setImagePath] = useState(defaultUserImageSrc)

  useEffect(() => {
    if (imagePath) {
      setImagePath(imagePath)
    }
  }, [imagePath])
  return (
    <div className={classNames([classes.Avatar, 'standard-shadow'])}>
      <Image
        src={localImagePath}
        alt="Изображение товара"
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}

export default Avatar
