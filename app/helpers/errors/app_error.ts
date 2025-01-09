export class AppError {
  public readonly _message: string
  public readonly _statusCode: number

  constructor(message: string, statusCode = 500) {
    this._message = message
    this._statusCode = statusCode
  }

  get message() {
    return { message: this._message }
  }

  get statusCode() {
    return this._statusCode
  }
}
