import { QueueCard } from '@/types/queues'
import { UserAuthRequestParams, UserAuthResponse } from '@/types/user'
import Queue from '@/types/queue'

export interface IRequest {
  api: RestApiService
  auth: AuthService
}

export interface RestApiService {
  getShortenedQueues(): Promise<QueueCard[]>
  getFullQueue(): Promise<Queue>
}

export interface AuthService {
  logInUser(
    params: UserAuthRequestParams
  ): Promise<UserAuthResponse | undefined>
}
