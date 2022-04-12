import React,{ useState } from 'react';
import { Routes, Route }from 'react-router-dom'
import Home from './home/Home'
import AptChart from './housechart/AptChart';
import OfficeChart from './housechart/OfficeChart';
import AptInfo from './houseinfo/AptInfo';
import OfficeInfo from './houseinfo/OfficeInfo';
import NotFound from './notfound/NotFound';
import AddUser from './user/AddUser';
import EditUser from './user/EditUser';
import UserList from './user/UserList';
import Modal from '../modal/Modal';
import { connect } from 'react-redux';
import { changeModal } from '../../redux';

//작업시 파일 추가 할 것
const Main = () => {

    return (
        <div>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/userlist" element={<UserList/>} />
            <Route exact path="/adduser" element={<AddUser/>} />
            <Route exact path="/edituser/:userid" element={<EditUser/>} />
            <Route exact path="/aptinfo" element={<AptInfo/>} />
            <Route exact path="/officeinfo" element={<OfficeInfo/>} />

            <Route path={"*"} element={<NotFound/>}/>
        </Routes>

        <Modal></Modal>
        </div>
    );
};

export default Main;