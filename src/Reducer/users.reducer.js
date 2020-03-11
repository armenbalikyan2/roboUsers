import { GET_USERS_LOADING, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../actions/user.actions';

const initialState = {
    gettingUser: false,
    userData: []
}

export default function usersReducer (state = initialState,action){
    switch (action.type){
        case GET_USERS_LOADING:
            return {
                ...state,
                gettingUser: true
            }
        case GET_USERS_SUCCESS:
            return{
                ...state,
                gettingUser: false,
                userData:  action.payload
            }
        case GET_USERS_FAILURE:
            return{
                ...state,
                gettingUser: false,
            }
        default:
            return state
    }
}