import React from 'react';
import { Link } from 'react-router-dom'
import { 
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

const AddUser = () => {
    return (
        <Form>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" placeholder='Enter Name'></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/user" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    );
};

export default AddUser;