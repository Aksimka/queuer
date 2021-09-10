import { IconProps } from '@/types/Icon'
import { FC, ReactElement } from 'react'

const PeopleIcon: FC<IconProps> = (props): ReactElement => {
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
        d="M12 6L22 16L12 26"
        stroke={color}
        strokeWidth={weight}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PeopleIcon
