import React, { useState } from 'react';
import { 
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

const Home = () => {
    const [fadeContent, setFadeContent] = useState('hide');
    const ctrlContentsHandler = () => {
        if(fadeContent === 'hide') setFadeContent('show');
        else if(fadeContent === 'show') setFadeContent('hide');
    }
    const fadeContentTag = fadeContent === 'show' ? "React, Redux, ReactStrap, Bootstrap" : "";
    return (
        <Form style={{width:'100%', height:'80vh'}}>
            <FormGroup>
                <img style={{ width:"50vh",height:"auto"}} alt="home_image" src={process.env.PUBLIC_URL  + '/img/homelogo.png'} />
            </FormGroup>
            <Button
                color="primary"
                onClick={()=> ctrlContentsHandler()}
            >사용기술</Button>
            <p>
                {fadeContentTag}
            </p>
        </Form>
    );
};

export default Home;