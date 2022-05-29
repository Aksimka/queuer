import { useMemo, useState } from 'react'
import usePagination from './usePagination'

type StaticPaginationProps<T> = {
  limit: number
  items: T[]
}

const useStaticPagination = <T>({
  limit = 3,
  items = [],
}: StaticPaginationProps<T>) => {
  const [_items, _setItems] = useState(items)
  const { goPage, range, currentPage, pages } = usePagination({
    length: items.length,
    limit: limit,
  })

  const currentItems = useMemo(() => {
    return [..._items].slice(range[0], range[1] + 1)
  }, [_items, range])

  const setItems = (items: T[]) => {
    _setItems(items)
  }

  return { currentItems, currentPage, goPage, setItems, pages }
}

export default useStaticPagination
