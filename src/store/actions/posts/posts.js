export const getPosts = () => ({
    type: 'GET_POSTS',
    rest: '/posts/',
    method: 'GET',
    query: {},
});

export const sendPost = post => ({
    type: 'SEND_POST',
    rest: '/posts/',
    method: 'POST',
    query: {},
});
