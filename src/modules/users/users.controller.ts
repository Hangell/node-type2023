import usersService from './users.service'

class UsersController {
  index(req, res) {
    const users = usersService.findAll()
    res.json(users)
  }

  show(req, res) {
    const { id } = req.params
    const user = usersService.findById(Number(id))
    if (!user) return res.sendStatus(404)
    res.json(user)
  }

  create(req, res) {
    const user = usersService.create(req.body)
    res.status(201).json(user)
  }

  update(req, res) {
    const { id } = req.params
    const user = usersService.update(Number(id), req.body)
    if (!user) return res.sendStatus(404)
    res.json(user)
  }

  delete(req, res) {
    const { id } = req.params
    const user = usersService.delete(Number(id))
    if (!user) return res.sendStatus(404)
    res.json(user)
  }
}

export default new UsersController()
