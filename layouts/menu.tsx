import styles from '@/styles/menu.module.scss'
import { ReactElement } from 'react'
import classNames from 'classnames'
import UiLink from '../components/typography/UiLink'

interface PropTypes {
  children: ReactElement
}

export default function MenuLayout(props: PropTypes): ReactElement {
  const { children } = props

  return (
    <div className={styles.Wrapper}>
      <nav className={styles.Menu}>
        <h2 className={classNames(styles.MenuTitle, 'display-center')}>
          .queuer
        </h2>
        <ul className={styles.MenuList}>
          <UiLink href="/">
            <div className={styles.MenuItem}>Все очереди</div>
          </UiLink>
          <UiLink href="/shops">
            <div className={styles.MenuItem}>Магазины</div>
          </UiLink>
          <UiLink href="/about">
            <div className={styles.MenuItem}>О нас</div>
          </UiLink>
        </ul>
      </nav>
      <div className={styles.Slot}>{children}</div>
    </div>
  )
}
