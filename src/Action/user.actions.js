export const GET_USERS_LOADING = 'GET_USERS_LOADING';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';


export const getUsersLoading = {
  type: GET_USERS_LOADING
};
  
export const getUsersSuccess = (data) => ({
  type: GET_USERS_SUCCESS,
  payload: data,
});
  
export const getUsersFailure = {
  type: GET_USERS_FAILURE,
};