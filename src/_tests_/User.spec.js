import { User } from '../User'

describe('User', () => {

    const CONDEMOR = 'condemor'

    it('informs when user is NOT friend with another user', () => {
        const user = new User()
        expect(user.isFriendWith(CONDEMOR)).toBeFalsy()
    })

    it('informs when user is friend with another user', () => {
        const user = new User()
        user.friends = [CONDEMOR]
        expect(user.isFriendWith(CONDEMOR)).toBeTruthy()
    })
});
