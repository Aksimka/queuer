import { setTheme, ThemeNames } from '@/themes/index'
import { makeAutoObservable } from 'mobx'

interface ThemeStore {
  currentTheme: ThemeNames
  rootElement: HTMLBodyElement | null
  setTheme(name?: ThemeNames): void
}

class Theme implements ThemeStore {
  public currentTheme: ThemeNames = ThemeNames.DEFAULT_LIGHT
  public rootElement: HTMLBodyElement | null = null

  constructor() {
    makeAutoObservable(this)
  }

  setRootElement(el: HTMLBodyElement) {
    this.rootElement = el
  }

  setTheme(name: ThemeNames = ThemeNames.DEFAULT_LIGHT) {
    this.currentTheme = name
    if (this.rootElement) {
      setTheme(this.rootElement, name)
    }
  }
}

export default new Theme()
