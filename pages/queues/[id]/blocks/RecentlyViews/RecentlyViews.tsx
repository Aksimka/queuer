import React, { FC, ReactElement } from 'react'
import classes from './RecentlyViews.module.css'
import CaretLeft from '@/components/icons/CaretLeft'
import classNames from 'classnames'
import CaretRight from '@/components/icons/CaretRight'

import imagesArray from './imagesArray'
import useStaticPagination from '@/hooks/pagination/useStaticPagination'
import ProductSmall from '@/components/ui/cards/ProductSmall/ProductSmall'

type RecentlyItem = {
  id: number
  path: string
  name: string
  price: number
}

const RecentlyViews: FC = (): ReactElement => {
  const { currentItems, currentPage, goPage, pages } =
    useStaticPagination<RecentlyItem>({
      limit: 3,
      items: imagesArray,
    })

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>Вы так-же смотрели:</div>
        <div className={classes.pagination}>
          <div
            className={classNames([classes.paginationIcon, 'display-center'], {
              [classes.iconDisabled]: currentPage === 0,
            })}
            onClick={() => goPage(currentPage - 1)}
          >
            <CaretLeft size={22} />
          </div>
          <div
            className={classNames([classes.paginationIcon, 'display-center'], {
              [classes.iconDisabled]: currentPage === pages.length - 1,
            })}
            onClick={() => goPage(currentPage + 1)}
          >
            <CaretRight size={22} />
          </div>
        </div>
      </div>
      <div className={classes.items}>
        {currentItems.map((image) => {
          return (
            <div className={classes.itemWrapper} key={image.id}>
              <ProductSmall
                imgPath={image.path}
                name={image.name}
                price={image.price}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecentlyViews
