import styles from "@/styles/menu.module.scss"
import {ReactElement} from "react";
import classNames from "classnames";
import Link from 'next/link'

interface PropTypes {
  children: ReactElement
}

export default function MenuLayout(props: PropTypes) {

  const {children} = props

  return (
    <div className={styles.Wrapper}>
      <nav className={styles.Menu}>
        <h2 className={classNames(styles.MenuTitle, 'display-center')}>.queuer</h2>
        <ul className={styles.MenuList}>
          <Link href="/" >
            <div className={styles.MenuItem}>
              Все очереди
            </div>
          </Link>
          <Link href="/about" >
            <div className={styles.MenuItem}>
              О нас
            </div>
          </Link>
        </ul>
      </nav>
      <div className={styles.Slot}>
        {children}
      </div>
    </div>
  )
}

