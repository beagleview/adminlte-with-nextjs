import { LOGIN, CLEAR } from '../types';
const initialState = {
    token: null,
    user: null
}

const authReducer = () => (state = initialState, { type, payload }) => {
    console.log("STAGE Login")
    switch (type) {
        case LOGIN:
            console.log("STAGE Login")
            return { ...state, token: payload.token, user: { username: payload.user.username } }
        case CLEAR:
            return initialState

        default:
            return state
    }
}

export default authReducer;