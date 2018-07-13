import authReducer from '../../reducers/auth';

test('should correctly return state for login', () => {
    const uid = 'dlåadlåapdlpåadl';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state).toEqual({
        uid
    });
});

test('should correctly return state for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({}, action);
    expect(state).toEqual({});
});