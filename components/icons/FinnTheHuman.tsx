import { IconProps } from '@/types/Icon'
import { FC, ReactElement } from 'react'

const FinnTheHuman: FC<IconProps> = (props): ReactElement => {
  const { size = 32, weight = 2, color = 'currentColor' } = props

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 13H11C8.79086 13 7 14.7909 7 17V18C7 20.2091 8.79086 22 11 22H21C23.2091 22 25 20.2091 25 18V17C25 14.7909 23.2091 13 21 13Z"
        stroke={color}
        strokeWidth={weight}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 19C12.3284 19 13 18.3284 13 17.5C13 16.6716 12.3284 16 11.5 16C10.6716 16 10 16.6716 10 17.5C10 18.3284 10.6716 19 11.5 19Z"
        fill={color}
      />
      <path
        d="M20.5 19C21.3284 19 22 18.3284 22 17.5C22 16.6716 21.3284 16 20.5 16C19.6716 16 19 16.6716 19 17.5C19 18.3284 19.6716 19 20.5 19Z"
        fill={color}
      />
      <path
        d="M3 8C3 7.20435 3.31607 6.44129 3.87868 5.87868C4.44129 5.31607 5.20435 5 6 5C6.79565 5 7.55871 5.31607 8.12132 5.87868C8.68393 6.44129 9 7.20435 9 8H23C23 7.20435 23.3161 6.44129 23.8787 5.87868C24.4413 5.31607 25.2044 5 26 5C26.7956 5 27.5587 5.31607 28.1213 5.87868C28.6839 6.44129 29 7.20435 29 8V18C29 20.1217 28.1571 22.1566 26.6569 23.6569C25.1566 25.1571 23.1217 26 21 26H11C8.87827 26 6.84344 25.1571 5.34315 23.6569C3.84285 22.1566 3 20.1217 3 18V8Z"
        stroke={color}
        strokeWidth={weight}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default FinnTheHuman
