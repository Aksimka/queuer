import { ReactElement } from 'react'
import Link from 'next/link'

interface PropTypes {
  children: ReactElement
  href?: string
}

export default function UiLink(props: PropTypes): ReactElement {
  const { children, href = '/' } = props
  return (
    <Link href={href} passHref={true}>
      {children}
    </Link>
  )
}
