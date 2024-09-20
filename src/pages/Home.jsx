import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../components/carousel/Carousel';

const Home = props => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <Carousel></Carousel>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;