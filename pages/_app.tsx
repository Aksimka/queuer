import '../styles/reset.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextComponentType } from 'next/dist/next-server/lib/utils'
import Modify from '../types/modify'
import { ReactElement, useEffect } from 'react'
import Theme from '@/store/Theme'
import { ThemeNames } from '@/themes/index'
// import '@/themes/default/light.css'

type ExtendedNuxtPage = {
  withLayout(comp: ReactElement): ReactElement
}

type ExtendedComponentType = NextComponentType & ExtendedNuxtPage

interface ExtendedComponent {
  Component: ExtendedComponentType
}

type ExtendedAppProps = Modify<AppProps, ExtendedComponent>

function MyApp({ Component, pageProps }: ExtendedAppProps): ReactElement {
  useEffect(() => {
    const body = document.querySelector('body')
    if (body) {
      Theme.setRootElement(body)
      Theme.setTheme(ThemeNames.DEFAULT_LIGHT)
    }
  })
  const withLayout = Component.withLayout || ((page: ReactElement) => page)

  return withLayout(<Component {...pageProps} />)
}
export default MyApp
