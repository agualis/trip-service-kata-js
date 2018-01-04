"use strict";

let UserSession = require('./UserSession');
let TripDAO = require('./TripDAO');

class TripService {
    getTripsFor(user) {
      if (this.currentUser() == null) throw new Error('User not logged in.')
      if (this.isFriendWithLoggedUser(user)) return this.findTripsFor(user)
      return []
    }

  isFriendWithLoggedUser(user) {
    let friends = user.getFriends();
    for (let i = 0; i < friends.length; i++) {
      let friend = friends[i];
      if (friend == this.currentUser()) {
        return true
      }
    }
    return false
  }

  findTripsFor(user) {
    return TripDAO.findTripsByUser(user)
  }

  currentUser() {
    return UserSession.getLoggedUser()
  }
}

module.exports = TripService
