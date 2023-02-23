import rolesService from './roles.service'

class RolesController {
  index(req, res) {
    const roles = rolesService.findAll()
    res.json(roles)
  }

  show(req, res) {
    const { id } = req.params
    const role = rolesService.findById(Number(id))
    if (!role) return res.sendStatus(404)
    res.json(role)
  }

  create(req, res) {
    const role = rolesService.create(req.body)
    res.status(201).json(role)
  }

  update(req, res) {
    const { id } = req.params
    const role = rolesService.update(Number(id), req.body)
    if (!role) return res.sendStatus(404)
    res.json(role)
  }

  delete(req, res) {
    const { id } = req.params
    const role = rolesService.delete(Number(id))
    if (!role) return res.sendStatus(404)
    res.json(role)
  }
}

export default new RolesController()
