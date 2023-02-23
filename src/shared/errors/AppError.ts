export class AppError {
  public readonly message: string
  public readonly statusCode: number

  constructor(message: string, statusCode = 400) {
    this.message = message
    this.statusCode = statusCode
  }

  public static badRequest(message: string) {
    return new AppError(message, 400)
  }

  public static notFound(message: string) {
    return new AppError(message, 404)
  }

  public static internal(message: string) {
    return new AppError(message, 500)
  }

  public static forbidden(message: string) {
    return new AppError(message, 403)
  }

  public static unauthorized(message: string) {
    return new AppError(message, 401)
  }

  public static conflict(message: string) {
    return new AppError(message, 409)
  }

  public static unprocessableEntity(message: string) {
    return new AppError(message, 422)
  }

  public static tooManyRequests(message: string) {
    return new AppError(message, 429)
  }

  public static serviceUnavailable(message: string) {
    return new AppError(message, 503)
  }

  public static gatewayTimeout(message: string) {
    return new AppError(message, 504)
  }

  public static badGateway(message: string) {
    return new AppError(message, 502)
  }

  public static notImplemented(message: string) {
    return new AppError(message, 501)
  }

  public static notAcceptable(message: string) {
    return new AppError(message, 406)
  }
}
