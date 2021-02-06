import { postsReducer } from './posts/postsReducer';
import { authReducer } from '_store/reducers/auth/authReducer';

export const rootReducer = {
    posts: postsReducer,
    auth: authReducer,
};
