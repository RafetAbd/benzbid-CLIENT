import axios from 'axios';
import history from '../history'

// Action Types
const SET_AUTH = 'SET_AUTH';
const SET_ERROR = 'SET_ERROR';
const TOKEN = 'token'

// type
type SetAuthAction = {
    type: typeof SET_AUTH,
    auth: {}
}

type SetErr = {
    type: typeof SET_ERROR,
    error: {}
}

// Action Creators
const setAuth = (auth: {}): SetAuthAction => ({
    type: SET_AUTH,
    auth
});

const setError = (error: {}): SetErr => ({
    type: SET_ERROR,
    error
});


// Thunk Creators
export const authenticate = (email: string, password: string, method: String) => async(dispatch: any) => {
    try {
        const res = await axios.post(`http://localhost:1337/auth/${method}`, {email, password});
        window.localStorage.setItem( TOKEN, res.data.token);
        dispatch(userInfo());
        history.push('/');
    } catch (authError) {
        return dispatch(setError({ error: authError }))
    }    
}

export const userInfo = () => async(dispatch: any) => {
    const token = window.localStorage.getItem(TOKEN);
    if ( token ) {
        const {data: user } = await axios.get('http://localhost:1337/auth/me', {
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

export const clearError = () => (dispatch: any) => {
    dispatch(setError({}));
}

const initialState = {
    auth: {},
    error: {}
}

export const authReducer = (state = initialState , action: any) => {
    switch (action.type) {
        case SET_AUTH:
            return { ...state, auth: action.auth };
        case SET_ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
}





