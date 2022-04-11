import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { 
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import { addUserHandler } from '../../../redux';

const AddUser = ({addUserHandler, users}) => {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [name, setName] = useState('');

    const onChangeId = (e) => {
        setId(e.target.value);
    }
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(id);
        //유효성체크
        if(id === '' || id == null) return alert('Id를 입력해 주세요.');
        if(name === '' || name == null) return alert('Name을 입력해 주세요.');
       
        //Id중복체크
        let confirmUniqueId = false;
        for(let i = 0; i < users.length; i++) {
            if(users[i].id === id) {
                alert("Id가 중복됩니다.");
                confirmUniqueId = true;
                break;
            }
        }
        if(confirmUniqueId) return;
        const newUser = {no: users.length + 1, id: id, name: name};
        addUserHandler(newUser);
        navigate("/userlist");
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Id</Label>
                <Input type="text" placeholder='Enter Id' value={id} onChange={onChangeId}></Input>

                <Label>Name</Label>
                <Input type="text" placeholder='Enter Name' value={name} onChange={onChangeName}></Input>
            </FormGroup>
            <Button type="submit">추가</Button>
            <Link to="/userlist" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    );
};

const mapStateToProps = ({userObj}) => {
    console.log("mapStateToProps:",userObj);
    return {
        users: userObj.users
    }
}

const mapDispatchToProps = {
    addUserHandler:(newUser) => addUserHandler(newUser)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);