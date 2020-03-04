const initialState = {
    gettingArray: false,
    arrayData: []
}

export default function arrayReducer (state = initialState,action){
    switch (action.type){
        case 'GET_ARRAY_REQUEST':
            return {
                ...state,
                gettingArray: true
            }
        case 'GET_ARRAY_SUCCESS':
            return{
                ...state,
                gettingArray: false,
                arrayData:  action.payload
            }
        case 'GET_ARRAY_FAILURE':
            return{
                ...state,
                gettingArray: false,
            }
        default:
            return state
    }
}