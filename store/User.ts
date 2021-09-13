import { makeAutoObservable } from 'mobx'
import { UserData } from '@/types/user'

type NullableUserData = UserData | null

export interface UserStore {
  isAuth: boolean
  setAuth(val: boolean): void
  userData: NullableUserData
  setUserData(val: NullableUserData): void
}

class User implements UserStore {
  public isAuth = false
  public userData: NullableUserData = null

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(val: boolean): void {
    this.isAuth = val
  }

  setUserData(val: NullableUserData): void {
    this.userData = val
  }
}

export default new User()
