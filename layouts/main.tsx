import styles from '@/styles/layouts/MainLayout.module.css'
import { ReactElement } from 'react'

interface PropTypes {
  heading?: string | ReactElement
  footer?: string | ReactElement
  children: ReactElement
}

export default function MainLayout(props: PropTypes): ReactElement {
  const { heading = '', footer = '', children } = props

  return (
    <div className={styles.Container}>
      <header className={styles.Heading}>{heading}</header>
      <main className={styles.Main}>{children}</main>
      <footer className={styles.Footer}>{footer}</footer>
    </div>
  )
}
