import queues from './../data/queues'
import queue from './../data/queue'
import { QueueCard } from '@/types/queues'
import { RestApiService } from '@/types/services'
import Queue from '@/types/queue'

export default class RestApiMock implements RestApiService {
  async getShortenedQueues(): Promise<QueueCard[]> {
    return queues
  }

  async getFullQueue(): Promise<Queue> {
    return queue
  }
}
