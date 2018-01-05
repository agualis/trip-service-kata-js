import { User } from '../User'
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
    let user
    beforeEach(()=> {
      user = new User()
      tripService = new TripService()
        loggedUser = 'any user'
        tripService.currentUser = jest.fn(()=> loggedUser)
    })

    it('returns an empty list when user has no friends ', () => {
        user.friends = []
        expect(tripService.getTripsFor(user)).toEqual([])
    });

    it('returns an empty list when user and loggedUser are no friends ', () => {
        user.friends = ['friend1', 'friend2']
        expect(tripService.getTripsFor(user)).toEqual([])
    });

    it('returns user trips when user and loggedUser are friends ', () => {
        user.friends = [loggedUser, 'another friend']
        const trips = ['a trip']
        tripService.findTripsFor = jest.fn(()=> trips)
        expect(tripService.getTripsFor(user)).toEqual(trips)
    });
});
