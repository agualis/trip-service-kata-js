import { User } from '../User'
let TripService = require('../TripService');

describe('TripService', () => {

    it('throws error when used not logged in', () => {
        const GUEST = null
        const NOT_USED_USER = null
        const tripService = new TripService()
        expect(() => tripService.getTripsFor(NOT_USED_USER, GUEST))
        .toThrowError("User not logged in.")
    });

    let tripService
    let loggedInUser = 'any user'
    let user
    beforeEach(()=> {
        user = new User()
        tripService = new TripService()
    })

    it('returns an empty list when user has no friends ', () => {
        user.friends = []
        expect(tripService.getTripsFor(user, loggedInUser)).toEqual([])
    });

    it('returns an empty list when user and loggedInUser are no friends ', () => {
        user.friends = ['friend1', 'friend2']
        expect(tripService.getTripsFor(user, loggedInUser)).toEqual([])
    });

    it('returns user trips when user and loggedInUser are friends ', () => {
        user.friends = [loggedInUser, 'another friend']
        const trips = ['a trip']
        tripService.findTripsFor = jest.fn(()=> trips)
        expect(tripService.getTripsFor(user, loggedInUser)).toEqual(trips)
    });
});
