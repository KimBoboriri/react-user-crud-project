import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { 
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Table
} from 'reactstrap';

import { removeUserHandler } from '../../../redux';

const UserList = ({removeUserHandler, users}) => {

    const userListTag = users.map((user) => 
            <tr key={user.id}>
                <td>{user.no}</td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td><Link to={"/edituser/" + user.id}>
                        <Button color="primary" outline>수정</Button>
                    </Link>
                </td>
                <td>
                   <Button color="danger" outline onClick={()=> removeUserHandler(user.id)}>삭제</Button>
                </td>
            </tr>
            );
    return (
        <div>
            <Link to="/addUser">
                <Button style={{float:'right'}}>사용자 추가</Button>
            </Link>
            <div style={{height:'850px'}}>
            <Table dark>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userListTag}
                </tbody>
            </Table>
            </div>
        </div>
    );
};

const mapStateToProps = ({userObj}) => {
    console.log("mapStateToProps:",userObj);
    return {
        users: userObj.users
    }
}

const mapDispatchToProps = {
    removeUserHandler: (userId) => removeUserHandler(userId)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);