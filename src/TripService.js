"use strict";

let UserSession = require('./UserSession');
let TripDAO = require('./TripDAO');

class TripService {
  getTripsFor(user) {
    if (this.currentUser() == null) throw new Error('User not logged in.')
    if ((user.isFriendWith(this.currentUser()))) return this.findTripsFor(user)
    return []
  }

  findTripsFor(user) {
    return TripDAO.findTripsByUser(user)
  }

  currentUser() {
    return UserSession.getLoggedUser()
  }
}

module.exports = TripService
