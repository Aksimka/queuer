import { ReactElement } from 'react'
import { MenuRoute, MenuRoutes } from '../../router'
import { useRouter } from 'next/router'
import classes from '@/layouts/Menu/Menu.module.css'
import classNames from 'classnames'
import UiLink from '@/components/ui/typography/UiLink'

interface PropTypes {
  children: ReactElement
}

export default function MenuLayout(props: PropTypes): ReactElement {
  const { children } = props
  const { pathname } = useRouter()

  return (
    <div className={classes.Wrapper}>
      <nav className={classes.Menu}>
        <h2 className={classNames(classes.MenuTitle, 'display-center')}>
          .queuer
        </h2>
        <ul className={classes.MenuList}>
          {MenuRoutes.map((item: MenuRoute) => {
            return (
              <UiLink href={item.link} key={item.link}>
                <div
                  className={classNames([
                    classes.MenuItem,
                    pathname === item.link ? classes.MenuItemActive : '',
                  ])}
                >
                  <div className={classes.MenuItemIcon}>{item.icon}</div>
                  <div className={classes.MenuItemText}>{item.name}</div>
                </div>
              </UiLink>
            )
          })}
        </ul>
      </nav>
      <div className={classes.Slot}>{children}</div>
    </div>
  )
}
