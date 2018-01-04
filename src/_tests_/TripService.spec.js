"use strict";

let TripService = require('../TripService');

describe('TripService', () => {

    it('throws error when used not logged in', () => {
        const tripService = new TripService()
        tripService.currentUser = jest.fn(()=> null)
        expect(() => tripService.getTripsFor(null))
          .toThrowError("User not logged in.")
    });

    it('returns an empty list when user has no friends ', () => {
        const LOGGED_USER = 'any user'
        const tripService = new TripService()
        tripService.currentUser = jest.fn(()=> LOGGED_USER)
        const user = { getFriends: () => [] }
        expect(tripService.getTripsFor(user)).toEqual([])
    });

    it('returns an empty list when user and loggedUser are no friends ', () => {
        const LOGGED_USER = 'any user'
        const tripService = new TripService()
        tripService.currentUser = jest.fn(()=> LOGGED_USER)
        const user = { getFriends: () => ['firend1', 'friend2'] }
        expect(tripService.getTripsFor(user)).toEqual([])
    });

    it('returns user trips when user and loggedUser are friends ', () => {
        const LOGGED_USER = 'any user'
        const tripService = new TripService()
        tripService.currentUser = jest.fn(()=> LOGGED_USER)
        const user = { getFriends: () => [LOGGED_USER] }
        const TRIPS= ['a trip']
        tripService.findTripsFor = jest.fn(()=> TRIPS)
        expect(tripService.getTripsFor(user)).toEqual(TRIPS)
    });
});
