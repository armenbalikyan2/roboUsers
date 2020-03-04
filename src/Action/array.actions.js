export const getArrayRequest = () => ({
    type: 'GET_ARRAY_REQUEST'
  })
  
export const getArraySuccess = (data) => ({
    type: 'GET_ARRAY_SUCCESS',
    payload: data
  })
  
export const getArrayFailure = () => ({
    type: 'GET_ARRAY_FAILURE'
  })