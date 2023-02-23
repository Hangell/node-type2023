import 'dotenv/config'
import * as express from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from '@shared/http/routes'
import { AppError } from '@shared/errors/AppError'

class App {
  public app: express.Application

  constructor() {
    this.app = express.default()
    this.middlewares()
    this.routes()
  }

  private middlewares(): void {
    this.app.use(cors())
    this.app.use(express.json())
  }

  private routes(): void {
    this.app.use(routes)
    this.app.use(
      (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        if (err instanceof AppError) {
          return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
          })
        }
        console.log(err) // Show error 500 in console
        return res.status(500).json({
          status: 'error',
          message: 'Internal server error',
        })
      },
    )
  }
}

export default new App()
