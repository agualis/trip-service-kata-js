export class User {
  constructor() {
    this.friends = []
  }

  isFriendWith(user) {
    return this.friends.includes(user)
  }
}