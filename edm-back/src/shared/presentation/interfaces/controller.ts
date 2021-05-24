import { HttpRequest, HttpResponse } from './http'

export interface IController<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}
