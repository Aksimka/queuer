import queues from './../data/queues'
import { QueueCard } from '@/types/queues'
import { RestApiService } from '@/types/api'

export default class RestApiMock implements RestApiService {
  async getShortenedQueues(): Promise<QueueCard[]> {
    return queues
  }
}
