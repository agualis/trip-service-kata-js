"use strict";

let TripDAO = require('./TripDAO');

class TripService {

  getTripsFor(user, loggedUser) {
    if (loggedUser == null) throw new Error('User not logged in.')
    if ((user.isFriendWith(loggedUser))) return this.findTripsFor(user)
    return []
  }

  findTripsFor(user) {
    return TripDAO.findTripsByUser(user)
  }
}

module.exports = TripService
