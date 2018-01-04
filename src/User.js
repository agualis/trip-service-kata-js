export class User {

  isFriendWith(user) {
    let friends = this.getFriends();
    for (let i = 0; i < friends.length; i++) {
      let friend = friends[i];
      if (friend == user) {
        return true
      }
    }
    return false
  }
}