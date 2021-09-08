import { makeAutoObservable } from 'mobx'

export interface UserStore {
  isAuth: boolean
  setAuth(val: boolean): void
}

export default class User implements UserStore {
  public isAuth = false

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(val: boolean): void {
    this.isAuth = val
  }
}
