import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import MeetWithMe from './MeetWithMe/MeetWithMe';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <MeetWithMe></MeetWithMe>
        </>
    );
};

export default Home;