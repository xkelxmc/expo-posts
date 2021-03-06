// type MiddlewareAPI = { dispatch: Dispatch, getState: () => State }
// type Middleware = (api: MiddlewareAPI) => (next: Dispatch) => Dispatch

import { BASE_URL } from '_utils/constants';

export const api = ({ dispatch, getState }) => next => action => {
    if (!action.rest) {
        next(action);
        return;
    }
    const url = BASE_URL + action.rest;
    const state = getState();
    next({
        ...action,
        type: action.type + '_START',
    });

    const headers = {
        'Content-Type': 'application/json',
    };
    if (state.auth.token) {
        headers.Authorization = `Bearer ${state.auth.token}`;
    }

    fetch(url, {
        method: action.method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers,
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: action.method === 'GET' ? undefined : JSON.stringify(action.query), // body data type must match "Content-Type" header
    })
        .then(async response => {
            const data = await response.json();
            if (response.status === 200) {
                next({
                    data: data,
                    type: action.type + '_SUCCESS',
                    prevAction: action,
                });
            } else {
                next({
                    error: data,
                    type: action.type + '_FAIL',
                    prevAction: action,
                });
            }
        })
        .catch(error => {
            next({
                error: error,
                type: action.type + '_FAIL',
                prevAction: action,
            });
        });
};
