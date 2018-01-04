"use strict";

let TripService = require('../TripService');

describe('TripService', () => {

    it('throws error when used not logged in', () => {
        const tripService = new TripService()
        tripService.currentUser = jest.fn(()=> null)
        expect(() => tripService.getTripsByUser(null))
          .toThrowError("User not logged in.")
    });

    it('returns an empty list when user has no friends ', () => {
        const LOGGED_USER = 'any user'
        const tripService = new TripService()
        tripService.currentUser = jest.fn(()=> LOGGED_USER)
        const user = { getFriends: () => [] }
        expect(tripService.getTripsByUser(user)).toEqual([])
    });
});
