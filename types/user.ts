export interface UserData {
  id: number
  name: string
  login: string
  email: string
}

export interface UserAuthRequestParams {
  login: string
  password: string
}

export interface UserAuthResponse {
  accessToken: string
  refreshToken: string
  userData: UserData
}
