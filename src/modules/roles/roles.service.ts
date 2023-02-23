class RolesServices {
  roles = [
    { id: 1, name: 'admin' },
    { id: 2, name: 'user' },
    { id: 3, name: 'guest' },
  ]

  findAll() {
    return this.roles
  }

  findById(id: number) {
    return this.roles.find(role => role.id === id)
  }

  findByName(name: string) {
    return this.roles.find(role => role.name === name)
  }

  create(role: { name: string }) {
    const newRole = { id: this.roles.length + 1, ...role }
    this.roles.push(newRole)
    return newRole
  }

  update(id: number, role: { name: string }) {
    const index = this.roles.findIndex(role => role.id === id)
    if (index === -1) return null
    this.roles[index] = { id, ...role }
    return this.roles[index]
  }

  delete(id: number) {
    const index = this.roles.findIndex(role => role.id === id)
    if (index === -1) return null
    const deletedRole = this.roles[index]
    this.roles.splice(index, 1)
    return deletedRole
  }
}

export default new RolesServices()
