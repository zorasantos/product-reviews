import type { HttpContext } from '@adonisjs/core/http'

export interface TController<Response = unknown> {
  handle(ctx: HttpContext): Promise<Response>
}
