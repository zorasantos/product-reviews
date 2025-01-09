import { HttpContext } from '@adonisjs/core/http'

export interface TController<Request = HttpContext, Response = unknown> {
  handle(request: Request): Promise<Response>
}
