import queues from '../mock/data/queues'
import { QueueCard } from '@/types/queues'
import { RestApiService } from '@/types/api'

export default class RestApi implements RestApiService {
  async getShortenedQueues(): Promise<QueueCard[]> {
    return queues
  }
}
