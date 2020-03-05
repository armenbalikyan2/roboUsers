import React from "react"
import { Input } from 'antd';
import "./search.css"


const SearchBox = (props)=>{
    const { Search } = Input;
    return(
        <div classNam="search-container">
        <Search
            className="search-box"
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={props.onSearch}
        />
      </div>
    )
}

export default SearchBox;

