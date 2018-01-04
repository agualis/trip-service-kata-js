"use strict";

let TripService = require('../TripService');

describe('TripService', () => {

    it('throws error when used not logged in', () => {
        const tripService = new TripService()
        tripService.currentUser = jest.fn(()=> null)
        expect(() => tripService.getTripsByUser(null))
          .toThrowError("User not logged in.")
    });

    xit('get user friends trip list', () => {
        const LOGGED_USER = 'any user'
        const TRIP_DAO = {}
        const TRIP_LIST = ['any trip']
        const user = {}
        user.getFriends = jest.fn(() => [LOGGED_USER])
        TRIP_DAO.findTripsByUser = jest.fn(() => TRIP_LIST)
        const tripService = new TripService(LOGGED_USER, TRIP_DAO)
        expect(tripService.getTripsByUser(user)).toBe(TRIP_LIST)
    });
});
