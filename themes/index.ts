import themesList from './themesList'

export enum ThemeNames {
  DEFAULT_LIGHT = 'defaultLight',
}

type ColorsTypeObject = {
  primary: string
  secondary: string
  success: string
  danger: string
  warning: string
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
