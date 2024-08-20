import React from 'react';
import avinashImage from '../images/avinash.jpg';
import pritiImage from '../images/piti.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'; // Use free-solid-svg-icons for folder open icon

const MeetOurExperts = () => {
  return (
    <div className="experts">
      <div className="meet">
        <h1>Meet Our Experts</h1>
        <p>
          Eduahead is a Professional Educational Platform. Here we will provide you only interesting content, which you
          will like very much. We're dedicated to providing you the best of Educational, with a focus on dependability
          and Handwritten notes, Most important questions and Free PYQs. We're working to turn our passion for
          Educational into a booming online website. We hope you enjoy our Educational as much as we enjoy offering them
          to you.
        </p>
      </div>

      <div className="expert-card">
        <div className="expert-card-left expert-card-common">
          <div className="first-card">
            <img className="i111" src={avinashImage} alt="Avinash Kumar" />
          </div>
          <div className="expert-text">
            <h2>Avinash Kumar</h2>
            <p>
              4+ Years of Experience <br /> <br />
              Mentored Millions of <br />
              Students through YT, <br />
              Unacademy & Doubtnut
            </p>
            <div className="experts-logo">
              <a href="https://www.linkedin.com/in/avinash-kumar-670070260/">
                <FontAwesomeIcon icon={faLinkedin} className="icons fa-flip fa-2xl" />
              </a>
              <a href="https://portfolio-avinash2.netlify.app">
                <FontAwesomeIcon icon={faFolderOpen} className="icons fa-2xl" />
              </a>
              <a href="https://github.com/Avinashkumar14808">
                <FontAwesomeIcon icon={faGithub} className="icons fa-shake fa-2xl" />
              </a>
            </div>
            <div className="back-card"></div>
            <div className="thid-card"></div>
          </div>
        </div>

        <div className="expert-card-right expert-card-common">
          <div className="first-card1">
            <img src={pritiImage} alt="Priti Bakshi" />
          </div>
          <div className="expert-text">
            <h2>Priti Bakshi</h2>
            <p>
              Academic Topper<br />
              Web Developer
              <br />
              <br />
              Mentored numerous<br />
              Students
            </p>
            <div className="experts-logo">
              <a href="https://www.linkedin.com/in/priti-bakshi-7a358223a/">
                <FontAwesomeIcon icon={faLinkedin} className="icons fa-flip fa-2xl" />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faFolderOpen} className="icons fa-2xl" />
              </a>
              <a href="https://github.com/pritibakshi">
                <FontAwesomeIcon icon={faGithub} className="icons fa-shake fa-2xl" />
              </a>
            </div>
            <div className="back-card1"></div>
            <div className="thid-card1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurExperts;
