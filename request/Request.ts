import { IRequest, RestApiService } from '@/types/api'
import RestApiMock from '../mock/services/rest-api'

class Request implements IRequest {
  api: RestApiService

  constructor() {
    this.api = new RestApiMock()
  }
}

const RequestInstance = new Request()

export default RequestInstance
