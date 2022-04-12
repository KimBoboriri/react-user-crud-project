import React from 'react';
import { Routes, Route }from 'react-router-dom'
import Home from './home/Home'
import AptInfo from './houseinfo/AptInfo';
import OfficeInfo from './houseinfo/OfficeInfo';
import NotFound from './notfound/NotFound';
import AddUser from './user/AddUser';
import EditUser from './user/EditUser';
import UserList from './user/UserList';

//작업시 파일 추가 할 것
const Main = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/userlist" element={<UserList/>} />
            <Route exact path="/adduser" element={<AddUser/>} />
            <Route exact path="/edituser/:userid" element={<EditUser/>} />

            <Route exact path="/aptinfo" element={<AptInfo/>} />
            <Route exact path="/officeinfo" element={<OfficeInfo/>} />
            <Route path={"*"} element={<NotFound/>}/>
        </Routes>
    );
};

export default Main;