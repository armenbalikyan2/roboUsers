import React, { useState } from "react"
import { get } from "./Helper"
import axios from 'axios';
import { arrayApi } from "./Api";

const Array = () =>{
    const [array,setArray]=useState([])
    const get = () => {
        axios.get(arrayApi)
        .then(res => {
            const list = res.data;
            setArray({list});
        })
        .catch(err=>{console.log("Error",err);
        })
    }
}