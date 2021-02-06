import { createReducer } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';

const initialState = {
    isLoading: false,
    user: null,
    isSetPinCode: false,
    token: null,
    errors: null,
};

export const authReducer = createReducer(initialState, {
    IS_SET_PIN_CODE: (state, action) => {
        state.isSetPinCode = action.value;
        return state;
    },
    SET_USER_TOKEN: (state, action) => {
        state.token = action.token;
        return state;
    },
    USER_LOGIN_START: (state, action) => {
        state.isLoading = true;
        return state;
    },
    USER_LOGIN_SUCCESS: (state, action) => {
        const { user, token } = action.data;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        SecureStore.setItemAsync('authToken', token);
        return state;
    },
    USER_LOGIN_FAIL: (state, action) => {
        state.isLoading = false;
        state.errors = action.error;
        return state;
    },
});
