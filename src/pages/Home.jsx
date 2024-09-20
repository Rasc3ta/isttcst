import React from "react";
import PropTypes from "prop-types";
import Carousel from "../components/carousel/Carousel";
import TypewriterComp from "../components/typewriter/TypewriterComp";

const Home = (props) => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="relative">
        <Carousel></Carousel>
        <div className="absolute top-[5%] left-[0%] z-[2] bg-[#1D4ED880] p-3 px-5 ">
          <h1 className="text-5xl lg:text-7xl text-white text-left">
            ISTT Unify
          </h1>

          <TypewriterComp></TypewriterComp>
        </div>
        <div className="  flex flex-col md:flex-row items-center justify-center gap-1  absolute top-0 left-0 z-[2] w-full h-full">
          <button className="btn text-white text-xl md:text-2xl bg-[#1D4ED880] border-[2px] hover:bg-blue-700 ">
            Explore Student Profiles
          </button>
          <button className="btn text-white text-xl md:text-2xl bg-[#1D4ED880] border-[2px] hover:bg-blue-700">
            Create Your Profile
          </button>
        </div>
        <div>
          <p className="absolute bottom-[10%] z-[2] text-xl md:text-2xl text-white text-left bg-[#1D4ED880] p-3 px-5 max-w-[500px]">
            Discover profiles of talented students from, stay updated, and build
            connections that matter.
          </p>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
