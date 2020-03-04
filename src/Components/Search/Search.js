import React from "react"
import { Input } from 'antd';
import 'antd/dist/antd.css';
import "./search.css"

const SearchBox = () => {
    const { Search } = Input;
    return(
        <div className="search-container">
        <Search
            className="search-box"
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
        />
      </div>
    )
}

export default SearchBox;

