import React, {
  FC,
  ReactElement,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import classes from './Carousel.module.css'
import classNames from 'classnames'
import CaretLeft from '@/components/icons/CaretLeft'
import CaretRight from '@/components/icons/CaretRight'

type PropTypes = {
  imagePaths: string[]
  imageWidth?: number
  width?: number
  height?: number
  onImageClick?(path: string): void
}

type ScrollSidesType = 'left' | 'right'

type WatchedRefAttrsType = {
  clientWidth: number
  scrollWidth: number
}

enum ScrollSides {
  LEFT = 'left',
  RIGHT = 'right',
}

const Carousel: FC<PropTypes> = (props): ReactElement => {
  const { imagePaths, imageWidth, onImageClick } = props

  const [scrollPosition, setScrollPosition] = useState(0)
  const [watchedRefAttrs, setWatchedRefAttrs] = useState<WatchedRefAttrsType>({
    clientWidth: 0,
    scrollWidth: 0,
  })

  const contentRef: RefObject<HTMLDivElement> = useRef(null)
  const ref = contentRef?.current

  const imgWidthStyles = {
    width: `${imageWidth}px` || 'auto',
  }

  const updateWatchedAttrs = (ref: HTMLDivElement | null): void => {
    if (ref) {
      setWatchedRefAttrs({
        clientWidth: ref.clientWidth,
        scrollWidth: ref.scrollWidth,
      })
    }
  }

  const scrollTo = (side: ScrollSidesType) => {
    if (ref) {
      const width = ref.clientWidth
      const offset =
        side === ScrollSides.LEFT
          ? ref.scrollLeft - width
          : ref.scrollLeft + width

      ref.scrollTo({
        left: offset,
        behavior: 'smooth',
      })
      setScrollPosition(offset >= 0 ? offset : 0)
    }
  }

  useEffect(() => {
    updateWatchedAttrs(ref)
  }, [ref])

  return (
    <div className={classes.Carousel}>
      <div
        className={classNames([
          classes.ScrollBlock,
          'display-center',
          scrollPosition <= 0 && classes.ScrollBlock_disabled,
        ])}
        onClick={() => scrollTo(ScrollSides.LEFT)}
      >
        <CaretLeft />
      </div>
      <div className={classes.ScrollableContent} ref={contentRef}>
        {imagePaths.map((path, index) => {
          return (
            <div
              className={classes.ImageWrapper}
              key={index}
              onClick={() => onImageClick && onImageClick(path)}
            >
              <img
                src={path}
                alt="Изображение товара"
                style={imgWidthStyles}
                className={classes.Image}
              />
            </div>
          )
        })}
      </div>
      <div
        className={classNames([
          classes.ScrollBlock,
          'display-center',
          watchedRefAttrs.scrollWidth <=
            scrollPosition + watchedRefAttrs.clientWidth &&
            classes.ScrollBlock_disabled,
        ])}
        onClick={() => scrollTo(ScrollSides.RIGHT)}
      >
        <CaretRight />
      </div>
    </div>
  )
}

export default Carousel
