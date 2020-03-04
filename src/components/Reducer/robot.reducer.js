const initialState = {
    gettingRobots: false,
    robotsData: []
}

export default function robotsReducer (state = initialState,action){
    switch (action.type){
        case 'GET_ROBOTS_REQUEST':
            return {
                ...state,
                gettingRobots: true
            }
        case 'GET_ROBOTS_SUCCESS':
            return{
                ...state,
                gettingRobots: false,
                robotsData:  action.payload
            }
        case 'GET_ROBOTS_FAILURE':
            return{
                ...state,
                gettingRobots: false,
            }
        default:
            return state
    }
}