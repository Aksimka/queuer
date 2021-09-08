import styles from '@/styles/layouts/MainLayout.module.css'
import { ReactElement, FC } from 'react'
import { observer } from 'mobx-react-lite'
import { UserStore } from '@/store/User'

interface PropTypes {
  heading?: string | ReactElement
  footer?: string | ReactElement
  children: ReactElement
  userStore: UserStore
}

const MainLayout: FC<PropTypes> = (props): ReactElement => {
  const { heading = '', footer = '', children } = props

  return (
    <div className={styles.Container}>
      <header className={styles.Heading}>{heading}</header>
      <main className={styles.Main}>{children}</main>
      <footer className={styles.Footer}>{footer}</footer>
    </div>
  )
}

export default observer(MainLayout)
