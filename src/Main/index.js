import React, {useEffect,useState,} from "react";
import {connect} from "react-redux";
import CardList from "../Components/CardList";
import SearchBox from "../Components/Search/Search";
import {getUsersRequest} from '../Thunks/user.function';


const Main = ({users,getUsersRequest,}) => {
    const [search, setSearch] = useState("")

    useEffect(() => {
        getUsersRequest();
    }, []);

    if (search !== "") {
        for (let i = 0; i < users.length; ++i) {
            if (search === users[i]) {
                users = [`${search}`];
                console.log(users);
            }else{
                users.splice(i,1);
                i--;
            }
        }
        console.log(search);        
    }
    return ( 
        <div>
        <SearchBox onSearch = {setSearch} /> 
        <CardList users = {users}/> 
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        users: state.users.userData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsersRequest: () => dispatch(getUsersRequest()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);