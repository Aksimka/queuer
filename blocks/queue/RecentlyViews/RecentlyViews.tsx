import React, { FC, ReactElement } from 'react'
import classes from './RecentlyViews.module.css'
import CaretLeft from '@/components/icons/CaretLeft'
import classNames from 'classnames'
import CaretRight from '@/components/icons/CaretRight'

import imagesArray from './imagesArray'
import usePagination from '../../../hooks/usePagination'

type RecentlyItem = {
  id: number
  path: string
  name: string
  price: number
}

const RecentlyViews: FC = (): ReactElement => {
  const { range, currentPage, goPage } = usePagination({
    limit: 3,
    length: imagesArray.length,
  })

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>Вы так-же смотрели:</div>
        <div className={classes.pagination}>
          <div
            className={classNames([classes.paginationIcon, 'display-center'])}
            onClick={() => goPage(currentPage - 1)}
          >
            <CaretLeft size={22} />
          </div>
          range: {range}, page: {currentPage}
          <div
            className={classNames([classes.paginationIcon, 'display-center'])}
            onClick={() => goPage(currentPage + 1)}
          >
            <CaretRight size={22} />
          </div>
        </div>
      </div>
      <div className={classes.items}>
        {/*{items.map((image) => {*/}
        {/*  return (*/}
        {/*    <div className={classes.itemWrapper} key={image.id}>*/}
        {/*      <ProductSmall*/}
        {/*        imgPath={image.path}*/}
        {/*        name={image.name}*/}
        {/*        price={image.price}*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  )*/}
        {/*})}*/}
      </div>
    </div>
  )
}

export default RecentlyViews
