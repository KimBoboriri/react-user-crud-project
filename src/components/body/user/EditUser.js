import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { 
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import { editUserHandler } from '../../../redux';

const EditUser = ({editUserHandler}) => {
    const navigate = useNavigate();
    const param = useParams();  //라우터 파라미터 get
    const [name, setName] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(name === '' || name == null) return alert('Name을 입력해 주세요.');
        const targetUser = {id: param.userid, name: name};
        console.log("바꿀대상:",targetUser);
        editUserHandler(targetUser);
        navigate("/userlist");
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" placeholder='Enter Name'  value={name} onChange={onChangeName}></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
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
    editUserHandler:(targetUser) => editUserHandler(targetUser)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);