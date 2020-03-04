import axios from 'axios';
import { arrayApi } from './Api';

export  function get(){
    return axios.get(arrayApi)
}