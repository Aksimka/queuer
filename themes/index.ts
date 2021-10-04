import themesList from './themesList'

export enum ThemeNames {
  DEFAULT_LIGHT = 'defaultLight',
}

type ColorsTypeObject = {
  primary: string
  primary_accent: string
  secondary: string
  success: string
  danger: string
  warning: string
  grey: string
  disabled: string
  content_background: string
  content_background_secondary: string
}

type ThemeObject = {
  name: string
  isDark: boolean
  colors: ColorsTypeObject
}

export const setTheme = (el: HTMLBodyElement, themeName: ThemeNames): void => {
  const foundTheme: ThemeObject = themesList[themeName]
  const colors = foundTheme.colors
  const keys = Object.keys(colors)
  keys.forEach((color) => {
    el &&
      el.style.setProperty(
        `--color-${color}`,
        colors[color as keyof ColorsTypeObject]
      )
  })
}
