import React from 'react';

const Home = () => {
    return (
        <div>
           <img width="850" height="850" alt="home_image" src={process.env.PUBLIC_URL  + '/img/homelogo.png'} />
        </div>
    );
};

export default Home;