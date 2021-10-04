import Pagination, {
  IPagination,
  PaginationConstructorProps,
} from './Pagination'

interface IUiStaticPagination<T> extends IPagination<T> {
  isLeftStuck(): boolean
  isRightStuck(): boolean
}

export default class UiStaticPagination<T>
  extends Pagination<T>
  implements IUiStaticPagination<T>
{
  constructor(props: PaginationConstructorProps<T>) {
    super(props)
  }

  isLeftStuck(): boolean {
    return this.from - this.offset < 0
  }

  isRightStuck(): boolean {
    return this.to + this.offset > this.items.length
  }
}
