import axios from 'axios';
import history from '../history'

// Action Types
const SET_AUTH = 'SET_AUTH';
const TOKEN = 'token'

// type
type SetAuthAction = {
    type: typeof SET_AUTH,
    auth: {}
}

// Action Creators
const setAuth = (auth: {}): SetAuthAction => ({
    type: SET_AUTH,
    auth
});

// Thunk Creators
export const authenticate = (email: string, password: string, method: String) => async(dispatch: any) => {
    try {
        const {data : token} = await axios.post(`/auth/${method}`, {email, password, method});
        window.localStorage.setItem( TOKEN, token);
        dispatch(userInfo());
        history.push('/');
    } catch (err) {
        console.error(err);
    }    
}

export const userInfo = () => async(dispatch: any) => {
    const token = window.localStorage.getItem(TOKEN);
    if ( token ) {
        const {data: user } = await axios.get('/auth/me', {
            headers: { 
                Authorization: token 
            }
        });
        return dispatch(setAuth(user));
    }
}

export const logout = () => async(dispatch: any) => {
    window.localStorage.removeItem(TOKEN);
    dispatch(setAuth({}));
    history.push('/login');
}

export const authReducer = (state = {}, action: any) => {
    switch (action.type) {
        case SET_AUTH:
            return action.auth;
        default:
            return state;
    }
}





