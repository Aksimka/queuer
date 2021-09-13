import { AuthService, IRequest, RestApiService } from '@/types/services'
import RestApiMock from '../mock/services/rest-api'
import AuthServiceMock from '../mock/services/auth'

class Request implements IRequest {
  api: RestApiService
  auth: AuthService

  constructor() {
    this.api = new RestApiMock()
    this.auth = new AuthServiceMock()
  }
}

const RequestInstance = new Request()

export default RequestInstance as Request
