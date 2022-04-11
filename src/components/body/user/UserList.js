import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { 
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Table
} from 'reactstrap';

const UserList = () => {
    const [userList, setUserList] = useState([
        {no: 1, id:'kdy', name:'김동영'},
        {no: 2, id:'lee', name:'이이이'}
    ]);

    function handleDelUser(userId) {
       setUserList(userList.filter(user => user.id !== userId));
    }

    const userListTag = userList.map((user) => 
            <tr key={user.id}>
                <td>{user.no}</td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td><Link to={"/edituser/" + user.id}>
                        <Button color="primary" outline>수정</Button>
                    </Link>
                </td>
                <td>
                   <Button color="danger" outline onClick={()=> handleDelUser(user.id)}>삭제</Button>
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

export default UserList;