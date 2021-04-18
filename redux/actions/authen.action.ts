import {CLEAR, LOGIN} from "../types";

const setLoginReducer = (payLoad) => ({
    type: LOGIN,
    payLoad
})

const setClearReducer = () => ({
    type: CLEAR,
})

const login = ({username, password}: any)=> {
    return dispatch=>{
        dispatch(setLoginReducer({token: Math.random().toString(), user:{username}}))
    }
}

const clear = ()=>{
    return dispatch=>{
        dispatch(setClearReducer())
    }
}

export default {
    login,
    clear
};