class UsersService {
  users = [
    {
      id: 1,
      name: 'Rodrigo Hangell',
      email: 'rodrigo@hangell.org',
      password: '********',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Dani Rangel',
      email: 'daniele@hangell.org',
      password: '********',
      role: 'user',
    },
    {
      id: 3,
      name: 'Henry Rangel',
      email: 'henry@hangell.org',
      password: '********',
      role: 'guest',
    },
    {
      id: 4,
      name: 'Emily Rangel',
      email: 'emily@hangell.org',
      password: '********',
      role: 'guest',
    },
  ]

  findAll() {
    return this.users
  }

  findById(id: number) {
    return this.users.find(user => user.id === id)
  }

  findByEmail(email: string) {
    return this.users.find(user => user.email === email)
  }

  create(user: {
    name: string
    email: string
    password: string
    role: string
  }) {
    const newUser = { id: this.users.length + 1, ...user }
    this.users.push(newUser)
    return newUser
  }

  update(
    id: number,
    user: { name: string; email: string; password: string; role: string },
  ) {
    const index = this.users.findIndex(user => user.id === id)
    if (index === -1) return null
    this.users[index] = { id, ...user }
    return this.users[index]
  }

  delete(id: number) {
    const index = this.users.findIndex(user => user.id === id)
    if (index === -1) return null
    const deletedUser = this.users[index]
    this.users.splice(index, 1)
    return deletedUser
  }
}

export default new UsersService()
