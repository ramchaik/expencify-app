import {
    login,
    logout
} from '../../actions/auth';

test('should generate aciton login object', () => {
    const uid = 'abc123';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
})

test('should generate action logout object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
})