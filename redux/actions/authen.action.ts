import {CLEAR, LOGIN} from "../types";

const setLoginReducer = (payLoad) => ({
    type: LOGIN,
    payLoad
})

const setClearReducer = () => ({
    type: CLEAR,
})

const login = ({username, password}: any)=> {
    console.log("login")
    return dispatch=>{
        setTimeout(()=>{
            dispatch(setLoginReducer({token: Math.random().toString(), user:{username}}))
        }, 500)
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