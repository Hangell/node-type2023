import { Router } from 'express'
import UsersController from '@modules/users/users.controller'
const usersRoutes = Router()

usersRoutes.get('/', UsersController.index)
usersRoutes.get('/:id', UsersController.show)
usersRoutes.post('/', UsersController.create)
usersRoutes.put('/:id', UsersController.update)
usersRoutes.delete('/:id', UsersController.delete)

export { usersRoutes }
