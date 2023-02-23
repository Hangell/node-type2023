import { Router } from 'express'
import { usersRoutes } from './users.routes'
import { rolesRoutes } from './roles.routes'

const routes = Router()

routes.get('/', (req, res) => {
  res.json({ message: 'Hello Hangell Routes' })
})

routes.use('/roles', rolesRoutes)
routes.use('/users', usersRoutes)

export { routes }
