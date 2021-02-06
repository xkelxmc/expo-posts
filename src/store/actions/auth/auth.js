export const loginUser = (email, password) => ({
    type: 'USER_LOGIN',
    rest: '/auth/login',
    method: 'POST',
    query: {
        email,
        password,
    },
});

export const setUserToken = token => ({
    type: 'SET_USER_TOKEN',
    token,
});

export const setIsSetPinCode = value => ({
    type: 'IS_SET_PIN_CODE',
    value,
});
