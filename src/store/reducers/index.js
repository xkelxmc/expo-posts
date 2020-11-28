import { postsReducer } from './posts/postsReducer';

const userReducer = (state, action) => {
    switch (action.type) {
        case 'TEST_ACTION_2':
            console.log('test', state, action);
            return state;
    }
    return {};
};

export const rootReducer = {
    posts: postsReducer,
    users: userReducer,
};
