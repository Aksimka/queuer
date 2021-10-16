import { useState } from 'react'

type PaginationProps = {
  limit: number
  length: number
  initPage?: number
}

type PaginationReturn = {
  range: [number, number]
  goPrevPage(): void
  goNextPage(): void
  setLength(length: number): void
}

const usePagination = ({
  limit,
  length,
  initPage = 0,
}: PaginationProps): PaginationReturn => {
  const [_length, _setLength] = useState(length - 1)
  const pages = new Array(Math.ceil(_length / limit))
    .fill(0)
    .map((i, index) => {
      const from = (index + 1) * limit - limit
      const to = (index + 1) * limit - 1
      return [from, to >= _length ? _length : to]
    })
  const [range, setRange] = useState(pages[initPage])
  const goNextPage = () => {
    // console.log(initPage, limit, setItems)
  }
  const goPrevPage = () => {
    // console.log(initPage, limit, setItems)
  }
  const setLength = (length: number): void => {
    _setLength(length)
  }
  return { range: [1, 2], goNextPage, goPrevPage, setLength }
}

export default usePagination
