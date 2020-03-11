import React, {useEffect,useState,} from "react";
import {connect} from "react-redux";
import CardList from "../components/cardList";
import SearchBox from "../components/search/Search";
import { Spin } from 'antd';
import { getUsersLoading } from "../actions/user.actions";
import { userNames } from "../selectors/filterUsers";



const Main = ({ users, getUsersLoading, loading })=>{
    const [search, setSearch] = useState("")

    useEffect(()=>{
        getUsersLoading();
    }, []);

    if (search !== "") {
        for (let i = 0; i < users.length; ++i) {
            if (search === users[i]) {
                users = [`${search}`];
                console.log(users);
            } else {
                users.splice(i,1);
                i--;
            }
        }
        console.log(search);        
    }
    return (
        <Spin spinning={loading}>
            <div>
                <SearchBox onSearch={setSearch} /> 
                <CardList users={users}/> 
            </div>
        </Spin>
    )
}

const mapStateToProps = (state) => ({
    users: userNames(state),
    loading: state.users.gettingUser
});

const mapDispatchToProps = (dispatch) => ({
    getUsersLoading: () => dispatch(getUsersLoading),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);