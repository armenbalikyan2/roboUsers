const initialState = {
    gettingSearch: false,
    searchData: []
}

export default function searchReducer (state = initialState,action){
    switch (action.type){
        case 'CHANGE_SEARCH_REQUEST':
            return {
                ...state,
                gettingSearch: true
            }
        case 'CHANGE_SEARCH_SUCCESS':
            return{
                ...state,
                gettingSearch: false,
                searchData:  action.payload
            }
        case 'CHANGE_SEARCH_FAILURE':
            return{
                ...state,
                gettingSearch: false,
            }
        default:
            return state
    }
}