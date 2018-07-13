import { login, logout } from '../../actions/auth';

test('should return action object for login', () => {
    const uid = 'doakdpoakdpoka';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should return action object for logout', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});