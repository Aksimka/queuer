import usePagination, { PaginationRange } from './usePagination'
import { useMemo, useState } from 'react'

type StaticPaginationProps<T> = {
  limit: number
  items: T[]
}

interface StaticPaginationReturn<T> {
  currentItems: T[]
  currentPage: number
  pages: PaginationRange[]
  goPage(page: number): [number, number]
  setItems(items: T[]): void
}

const useStaticPagination = <T>({
  limit = 3,
  items = [],
}: StaticPaginationProps<T>): StaticPaginationReturn<T> => {
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
