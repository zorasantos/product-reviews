import { HttpContext, Response } from '@adonisjs/core/http'

export interface HttpResponse extends Response {}

export interface HttpRequest extends HttpContext {}
