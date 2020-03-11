import { createSelector } from 'reselect'

const getData = (state) => state.users;
const getUserData = createSelector(
    getData,
    (data) => data.userData,
)

export const userNames = createSelector(
    getUserData,
    (userData) =>{
        return  userData.map((user)=>(
            user.username
        ))
    }
)
