import { useState } from 'react'

type PaginationProps<T> = {
  payloadItems: T[]
  initPage: number
  limit: number
}

type PaginationReturn<T> = {
  items: T[]
  goPrevPage(): void
  goNextPage(): void
}

const usePagination = <T>({
  payloadItems,
  initPage,
  limit,
}: PaginationProps<T>): PaginationReturn<T> => {
  const [items, setItems] = useState<T[]>(payloadItems)
  console.log(initPage, limit, setItems)
  const goNextPage = () => {
    console.log(initPage, limit, setItems)
  }
  const goPrevPage = () => {
    console.log(initPage, limit, setItems)
  }
  return { items, goNextPage, goPrevPage }
}

export default usePagination
