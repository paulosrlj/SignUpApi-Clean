import { MissingParamError } from '../errors/missing-param.error'
import { HttpRequest, HttpResponse } from '../protocols/https'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!(httpRequest.body.name)) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }

    return {
      statusCode: 400,
      body: new MissingParamError('email')
    }
  }
}
