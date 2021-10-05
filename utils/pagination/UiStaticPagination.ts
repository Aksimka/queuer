import Pagination, {
  IPagination,
  PaginationConstructorProps,
} from './Pagination'

interface IUiStaticPagination<T> extends IPagination {
  items: T[]
  getPrevItems(): T[]
  getNextItems(): T[]
  changeItems(items: T[]): void
  getCurrentPage(): T[]
  isLeftStuck(): boolean
  isRightStuck(): boolean
}

interface UiPaginationConstructorProps<T> extends PaginationConstructorProps {
  items: T[]
}

export default class UiStaticPagination<T>
  extends Pagination
  implements IUiStaticPagination<T>
{
  items: T[] = []

  constructor(props: UiPaginationConstructorProps<T>) {
    super(props)

    const { items } = props
    this.items = items
    this.length = items.length
  }

  getPrevItems(): T[] {
    const [from] = this.goPrev()
    return this.items.splice(from, this.offset)
  }

  getNextItems(): T[] {
    const [from] = this.goNext()
    return this.items.splice(from, this.offset)
  }

  changeItems(items: T[]): void {
    this.items = items
    this.length = items.length
  }

  getCurrentPage(): T[] {
    return this.items.splice(this.from, this.offset)
  }

  isLeftStuck(): boolean {
    return this.from - this.offset < 0
  }

  isRightStuck(): boolean {
    return this.to + this.offset > this.items.length
  }
}
