import User, { UserStore } from '@/store/User'
import { ReactElement, FC, PropsWithChildren } from 'react'
import { observer } from 'mobx-react-lite'
import classes from '@/layouts/Main/MainLayout.module.css'
import Avatar from '@/components/ui/Avatar/Avatar'
import CommonButton from '@/components/ui/buttons/CommonButton/CommonButton'
import classNames from 'classnames'
import UiButton from '@/components/ui/buttons/UiButton/UiButton'
import useAuth from '@/hooks/useAuth'

type PropTypes = {
  customHeadingBlock?: ReactElement
  footer?: string | ReactElement
}

type WithStore = {
  userStore: UserStore
}

const Component: FC<PropsWithChildren<PropTypes> & WithStore> = observer(
  (props): ReactElement => {
    const { footer = '', children, customHeadingBlock, userStore } = props

    const { logIn } = useAuth()

    return (
      <div className={classes.Container}>
        <header className={classNames([classes.Heading, 'standard-shadow'])}>
          <div className={classes.CustomHeadingBlock}>
            {customHeadingBlock && customHeadingBlock}
          </div>
          <div className={classes.StaticHeadingBlock}>
            {userStore.isAuth ? (
              <div className={classes.ProfileBlock}>
                <div className={classes.ProfileBlockGreeting}>
                  Здравствуйте, {User.userData?.name || 'Username'}
                </div>
                <div className={classes.AvatarWrapper}>
                  <Avatar imagePath="/images/user.jpeg" />
                </div>
              </div>
            ) : (
              <div className={classes.LoginBlock}>
                <div className={classes.LoginBlockButton}>
                  <CommonButton onClick={() => logIn()}>Войти</CommonButton>
                </div>
                <div className={classes.LoginBlockButton}>
                  <UiButton mode="primary">Регистрация</UiButton>
                </div>
              </div>
            )}
          </div>
        </header>
        <main className={classes.Main}>{children}</main>
        <footer className={classes.Footer}>{footer}</footer>
      </div>
    )
  }
)

export default function MainLayout(
  props: PropsWithChildren<PropTypes>
): ReactElement {
  const userStore = User
  return (
    <Component userStore={userStore} {...props}>
      {props.children}
    </Component>
  )
}
