import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import MeetWithMe from './MeetWithMe/MeetWithMe';

const Home = () => {
    return (
        <div>
            <h2> this is home</h2>
            <Banner></Banner>
            <Services></Services>
            <MeetWithMe></MeetWithMe>
        </div>
    );
};

export default Home;