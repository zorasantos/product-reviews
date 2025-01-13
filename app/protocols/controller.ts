import { HttpContext } from '@adonisjs/core/http'

export interface TController<Request = HttpContext, Response = unknown> {
  handle(ctx: HttpContext): Promise<Response>
}
