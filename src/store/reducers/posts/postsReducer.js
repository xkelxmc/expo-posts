import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    posts: [],
    errors: null,
};

export const postsReducer = createReducer(initialState, {
    TEST_ACTION: (state, action) => {
        console.log(state, action);
        return state;
    },
    GET_POSTS_START: (state, action) => {
        state.isLoading = true;
        return state;
    },
    GET_POSTS_SUCCESS: (state, action) => {
        state.isLoading = false;
        state.posts = action.data;
        return state;
    },
    GET_POSTS_FAIL: (state, action) => {
        state.isLoading = false;
        state.errors = action.error;
        return state;
    },
});
