import { QueueCard } from '@/types/queues'
import { UserAuthRequestParams, UserAuthResponse } from '@/types/user'

export interface IRequest {
  api: RestApiService
  auth: AuthService
}

export interface RestApiService {
  getShortenedQueues(): Promise<QueueCard[]>
}

export interface AuthService {
  logInUser(
    params: UserAuthRequestParams
  ): Promise<UserAuthResponse | undefined>
}
