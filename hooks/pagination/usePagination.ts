import { useCallback, useState, useMemo } from 'react'

type PaginationProps = {
  limit: number
  length: number
  initPage?: number
}

const usePagination = ({ limit, length, initPage = 0 }: PaginationProps) => {
  const [page, setPage] = useState(initPage)
  const [_length, _setLength] = useState(length - 1)
  const pages = useMemo(() => {
    return new Array(Math.ceil(_length / limit)).fill(0).map((i, index) => {
      const from = (index + 1) * limit - limit
      const to = (index + 1) * limit - 1
      return [from, to >= _length ? _length : to]
    })
  }, [_length, limit])

  const [range, setRange] = useState(pages[page])

  const goPage = useCallback(
    (page: number) => {
      const newRange = pages[page]
      if (newRange) {
        setRange(newRange)
        setPage(page)
      }
      return newRange
    },
    [pages]
  )
  const setLength = useCallback((length: number): void => {
    _setLength(length)
  }, [])

  return {
    range,
    currentPage: page,
    goPage,
    setLength,
    pages,
  }
}

export default usePagination
