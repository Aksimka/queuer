import queues from './../data/queues'
import fullQueues from '../data/fullQueues'
import { QueueCard } from '@/types/queues'
import { RestApiService } from '@/types/services'
import Queue from '@/types/queue'

export default class RestApiMock implements RestApiService {
  async getShortenedQueues(): Promise<QueueCard[]> {
    return queues
  }

  async getFullQueue(id: number | undefined): Promise<Queue | undefined> {
    return fullQueues.find((i) => i.id === id)
  }
}
