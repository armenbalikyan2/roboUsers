export const changeSearchRequest = () => ({
    type: 'CHANGE_SEARCH_REQUEST'
  })

export const changeSearchSuccess = (data) => ({
    type: 'CHANGE_SEARCH_SUCCESS',
    payload: data
})
export const changeSearchFailure = () => ({
    type: 'CHANGE_SEARCH_FAILURE'
})
