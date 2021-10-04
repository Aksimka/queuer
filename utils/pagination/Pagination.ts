// Для использования этой пагинации для пагинации асинхронных данных надо сделать параметр items опциональным и использовать только счетчики

export interface IPagination<T> {
  items: T[]
  offset: number
  from: number
  to: number
  goNext(): T[]
  goPrev(): T[]
  getCurrentPage(): T[]
  changeOffset(offset: number): void
  changeItems(items: T[]): void
}

export type PaginationConstructorProps<T> = {
  items: T[]
  offset: number
  from?: number
}

export default class Pagination<T> implements IPagination<T> {
  items: T[] = []
  offset = 0
  from = 0
  to = 0

  constructor(props: PaginationConstructorProps<T>) {
    const { items, offset, from } = props
    this.items = items
    this.offset = offset
    this.from = from || 0
    this.to = this.from + this.offset
  }

  goNext(): T[] {
    const newToValue = this.to + this.offset
    if (newToValue <= this.items.length) {
      this.from += this.offset
      this.to = newToValue
    } else {
      this.from -= this.offset
      this.to = this.items.length
    }
    return this.getCurrentPage()
  }

  goPrev(): T[] {
    const newFromValue = this.from - this.offset
    if (newFromValue >= 0) {
      this.from = newFromValue
      this.to -= this.offset
    } else {
      this.from = 0
      this.to = this.offset
    }
    return this.getCurrentPage()
  }

  getCurrentPage(): T[] {
    return this.items.splice(this.from, this.offset)
  }

  changeItems(items: T[]): void {
    this.items = items
  }

  changeOffset(offset: number): void {
    this.offset = offset
  }
}
