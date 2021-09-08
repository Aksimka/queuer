import { makeAutoObservable } from 'mobx'

export interface UserStore {
  isAuth: boolean
  setAuth(val: boolean): void
}

class User implements UserStore {
  public isAuth = false

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(val: boolean): void {
    this.isAuth = val
  }
}

export default new User()
