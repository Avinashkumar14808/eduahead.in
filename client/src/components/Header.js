import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
const Header = () => {
  return (
    <header  className="common-background">
      {/* <Navbar /> */}
      <div className="hero">
        <div className="left">
          {/* <h1>A <span> Love for <br /> Learning </span> Starts <br /> with <span className="typing"> </span> </h1> */}
          <h1>A <span> Love for <br /> Learning </span> Starts <br /> with EduAhead </h1>
          <div className="free">
            <div className="line"></div>
            <p className="txt">Best place to get Quality Notes, Important Questions <br /> and important Board updates at <span>FREE OF COST</span></p>
            <p className="hero-p">Best place to get Quality Notes, Important <br /> Questions and important Board updates at <span>FREE OF COST</span></p>
          </div>
          <div className="btn">
            <Link to="/login"><button className="login"><span> Login </span></button></Link>
            <Link to="/signup"><button className="join"><span> Join Now </span></button></Link>
          </div>
        </div>
        <div className="box111">
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="hover-point"></div>
          <div className="box-contents vert-move"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
