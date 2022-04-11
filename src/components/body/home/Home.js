import React, { useState } from 'react';
import { Button } from 'reactstrap'; 

const Home = () => {
    const [fadeContent, setFadeContent] = useState('hide');
    const ctrlContentsHandler = () => {
        if(fadeContent === 'hide') setFadeContent('show');
        else if(fadeContent === 'show') setFadeContent('hide');
    }
    const fadeContentTag = fadeContent === 'show' ? "React, Redux, ReactStrap, Bootstrap" : "";
    return (
        <div>
           <img width="850" height="780" alt="home_image" src={process.env.PUBLIC_URL  + '/img/homelogo.png'} />
           <div>
            <Button
                color="primary"
                onClick={()=> ctrlContentsHandler()}
            >사용기술</Button>
            <p>
                {fadeContentTag}
            </p>
            </div>
        </div>
    );
};

export default Home;