import { QueueCard } from '@/types/queues'

export interface IRequest {
  api: RestApiService
}

export interface RestApiService {
  getShortenedQueues(): Promise<QueueCard[]>
}
