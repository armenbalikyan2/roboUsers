import axios from 'axios';

//array api
export const usersApi = "https://jsonplaceholder.typicode.com/users";
//main api
export const url = "https://robohash.org/";


//getter function
export const getUsers = () => {
    return axios.get(usersApi);
};

