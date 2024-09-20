import React from "react";
import PropTypes from "prop-types";
import Carousel from "../components/carousel/Carousel";
import TypewriterComp from "../components/typewriter/TypewriterComp";

const Home = (props) => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="relative">
        <Carousel></Carousel>
        <div className="absolute bottom-[10%] left-[0%] z-[2] bg-[#1D4ED880] p-3 px-5 ">
          <h1 className="text-5xl lg:text-7xl text-white text-left">
            ISTT Unify
          </h1>
          <TypewriterComp></TypewriterComp>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
