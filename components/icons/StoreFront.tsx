import { IconProps } from '@/types/Icon'
import { FC, ReactElement } from 'react'

const StoreFront: FC<IconProps> = (props): ReactElement => {
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
        d="M6 17.4485V26C6 26.2652 6.10536 26.5195 6.29289 26.7071C6.48043 26.8946 6.73478 27 7 27H25C25.2652 27 25.5196 26.8946 25.7071 26.7071C25.8946 26.5195 26 26.2652 26 26V17.4487"
        stroke={color}
        strokeWidth={weight}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.7543 5H25.2457C25.463 5 25.6744 5.07079 25.8479 5.20165C26.0214 5.33251 26.1475 5.51633 26.2072 5.72528L28 12H4L5.79278 5.72528C5.85248 5.51633 5.97862 5.33251 6.15211 5.20165C6.3256 5.07079 6.53699 5 6.7543 5Z"
        stroke={color}
        strokeWidth={weight}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12V14C12 15.0609 11.5786 16.0783 10.8284 16.8284C10.0783 17.5786 9.06087 18 8 18C6.93913 18 5.92172 17.5786 5.17157 16.8284C4.42143 16.0783 4 15.0609 4 14V12"
        stroke={color}
        strokeWidth={weight}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12V14C20 15.0609 19.5786 16.0783 18.8284 16.8284C18.0783 17.5786 17.0609 18 16 18C14.9391 18 13.9217 17.5786 13.1716 16.8284C12.4214 16.0783 12 15.0609 12 14V12"
        stroke={color}
        strokeWidth={weight}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 12V14C28 15.0609 27.5786 16.0783 26.8284 16.8284C26.0783 17.5786 25.0609 18 24 18C22.9391 18 21.9217 17.5786 21.1716 16.8284C20.4214 16.0783 20 15.0609 20 14V12"
        stroke={color}
        strokeWidth={weight}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default StoreFront
