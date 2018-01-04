"use strict";

let UserSession = require('./UserSession');
let TripDAO = require('./TripDAO');

class TripService {
    getTripsByUser(user) {
        let tripList = [];
        let loggedUser = this.currentUser();
        let isFriend = false;
        if (this.loggedUser != null) {
            let friends = user.getFriends();
            for (let i=0; i < friends.length; i++) {
                let friend = friends[i];
                if (friend == this.loggedUser) {
                    isFriend = true;
                    break;
                }
            };
            if (isFriend) {
                tripList = TripDAO.findTripsByUser(user);
            }
            return tripList;
        } else {
            throw new Error('User not logged in.');
        }
    }

  currentUser() {
    return UserSession.getLoggedUser()
  }
}

module.exports = TripService
