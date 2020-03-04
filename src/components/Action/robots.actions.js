export const getRobotsRequest = () => ({
    type: 'GET_ROBOTS_REQUEST'
  })
  
export const getRobotsSuccess = (data) => ({
    type: 'GET_ROBOTS_SUCCESS',
    payload: data
  })
  
export const getRobotsFailure = () => ({
    type: 'GET_ROBOTS_FAILURE'
  })

