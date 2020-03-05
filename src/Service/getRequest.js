import { getUsersLoading, getUsersSuccess, getUsersFailure } from "../Action/user.actions";
import { getUsers } from "../Api/Api";


export const getUsersRequest = () => (dispatch) => {
    dispatch(getUsersLoading);
    getUsers().then(res => {
        function getFields(input, field1,field2) {
            var output = [];
            for (var i=0; i < input.length ; ++i)
                output.push(input[i][field1]);
            return output;
        }
        res.data=getFields(res.data,"username")
        dispatch(getUsersSuccess(res.data))
    }).catch(e => dispatch(getUsersFailure));
};