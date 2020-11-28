export const getPosts = () => ({
    type: 'GET_POSTS',
    rest: '/posts/',
    method: 'GET',
    query: {},
});
