import { FC, ReactElement } from 'react'
import Link from 'next/link'

interface PropTypes {
  children: ReactElement
  href?: string
}

const UiLink: FC<PropTypes> = (props): ReactElement => {
  const { children, href = '/' } = props
  return (
    <Link href={href} passHref={true}>
      {children}
    </Link>
  )
}

export default UiLink
