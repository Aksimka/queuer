// Для использования этой пагинации для пагинации асинхронных данных надо сделать параметр items опциональным и использовать только счетчики

type ReturnRangeType = [number, number]

export interface IPagination {
  offset: number
  length: number
  from: number
  to: number
  goNext(): ReturnRangeType
  goPrev(): ReturnRangeType
  getCurrentRange(): ReturnRangeType
  changeOffset(offset: number): void
  changeLength(newLength: number): void
}

export type PaginationConstructorProps = {
  offset: number
  length: number
  from?: number
}

export default class Pagination implements IPagination {
  offset = 0
  length = 0
  from = 0
  to = 0

  constructor(props: PaginationConstructorProps) {
    const { offset, length, from } = props
    this.offset = offset
    this.length = length
    this.from = from || 0
    this.to = this.from + this.offset
  }

  goNext(): ReturnRangeType {
    const newToValue = this.to + this.offset
    if (newToValue <= this.length) {
      this.from += this.offset
      this.to = newToValue
    } else {
      this.from -= this.offset
      this.to = this.length
    }
    return [this.from, this.to]
  }

  goPrev(): ReturnRangeType {
    const newFromValue = this.from - this.offset
    if (newFromValue >= 0) {
      this.from = newFromValue
      this.to -= this.offset
    } else {
      this.from = 0
      this.to = this.offset
    }
    return [this.from, this.to]
  }

  getCurrentRange(): ReturnRangeType {
    return [this.from, this.to]
  }

  changeOffset(offset: number): void {
    this.offset = offset
  }

  changeLength(newLength: number): void {
    this.offset = newLength
  }
}
