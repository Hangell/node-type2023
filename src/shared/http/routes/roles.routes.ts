import { Router } from 'express'
import RolesController from '@modules/roles/roles.controller'

const rolesRoutes = Router()

rolesRoutes.get('/', RolesController.index)
rolesRoutes.get('/:id', RolesController.show)
rolesRoutes.post('/', RolesController.create)
rolesRoutes.put('/:id', RolesController.update)
rolesRoutes.delete('/:id', RolesController.delete)

export { rolesRoutes }
