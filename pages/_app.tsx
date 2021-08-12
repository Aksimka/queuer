import '../styles/reset.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextComponentType } from "next/dist/next-server/lib/utils";
import Modify from "../types/modify";
import { ReactElement } from "react";

type ExtendedNuxtPage = { withLayout: Function }

type ExtendedComponentType = NextComponentType & ExtendedNuxtPage

interface ExtendedComponent{
  Component: ExtendedComponentType
}

interface ExtendedAppProps extends Modify<AppProps, ExtendedComponent>{}

function MyApp({ Component, pageProps }: ExtendedAppProps) {
  const withLayout = Component.withLayout || ((page: ReactElement) => page)

  return withLayout(<Component {...pageProps} />)
}
export default MyApp
