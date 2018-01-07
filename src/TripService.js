"use strict";

class TripService {
  constructor(tripDAO) {
    this.tripDAO = tripDAO
  }

  getTripsFor(user, loggedUser) {
    if (loggedUser == null) throw new Error('User not logged in.')
    if ((user.isFriendWith(loggedUser))) return this.tripDAO.findTripsByUser(user)
    return []
  }
}

module.exports = TripService
