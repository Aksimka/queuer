import authUser from '../data/users'
import { AuthService } from '@/types/services'
import { UserAuthRequestParams, UserAuthResponse } from '@/types/user'
import User from '@/store/User'

export default class Auth implements AuthService {
  async logInUser(
    params: UserAuthRequestParams
  ): Promise<UserAuthResponse | undefined> {
    const { login, password } = params
    console.log(password) // to avoid eslint error
    const foundUser = authUser.find((i) => i.userData?.login === login)
    User.setAuth(true)
    foundUser?.userData && User.setUserData(foundUser.userData)
    return foundUser
  }
}
