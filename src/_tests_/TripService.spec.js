"use strict";

let TripService = require('../TripService');

describe('TripService', () => {

    it('throws error when used not logged in', () => {
        const GUEST = null
        const NOT_USED_USER = null
        const tripService = new TripService()
        tripService.currentUser = jest.fn(()=> GUEST)
        expect(() => tripService.getTripsFor(NOT_USED_USER))
        .toThrowError("User not logged in.")
    });

    let tripService
    let loggedUser
    beforeEach(()=> {
        tripService = new TripService()
        loggedUser = 'any user'
        tripService.currentUser = jest.fn(()=> loggedUser)
    })

    it('returns an empty list when user has no friends ', () => {
        const user = { getFriends: () => [] }
        expect(tripService.getTripsFor(user)).toEqual([])
    });

    it('returns an empty list when user and loggedUser are no friends ', () => {
        const user = { getFriends: () => ['friend1', 'friend2'] }
        expect(tripService.getTripsFor(user)).toEqual([])
    });

    it('returns user trips when user and loggedUser are friends ', () => {
        const user = { getFriends: () => [loggedUser] }
        const trips = ['a trip']
        tripService.findTripsFor = jest.fn(()=> trips)
        expect(tripService.getTripsFor(user)).toEqual(trips)
    });
});
