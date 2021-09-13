import queues from './../data/queues'
import { QueueCard } from '@/types/queues'
import { RestApiService } from '@/types/services'

export default class RestApiMock implements RestApiService {
  async getShortenedQueues(): Promise<QueueCard[]> {
    return queues
  }
}
