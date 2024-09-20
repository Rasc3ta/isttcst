import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import PropTypes from 'prop-types';

const TypewriterComp = props => {
    return (
      <div className='text-white text-3xl lg:text-5xl text-left' >
        <Typewriter
          words={["Connect", "Explore", "Collaborate"]}
          loop={0}
          // typeSpeed={40}
          cursor
        />
      </div>
    );
};

TypewriterComp.propTypes = {
    
};

export default TypewriterComp;