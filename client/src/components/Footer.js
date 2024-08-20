import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Import images
import placeholderImg from '../images/placeholder.png';
import emailImg from '../images/email.png';
import phoneImg from '../images/phone.png';
import copyrightImg from '../images/copyright.png';

const Footer = () => {
  return (
    <div className="eduahead-foot">
      <div className="footer">
        <div className="c1">
          <h1>EduAhead</h1>
          <p>
            We have present<br />
            quality notes,<br />
            important <br />
            questions and<br />
            exam related <br />
            important <br />
            updates on our <br />
            site for your <br />
            convenience. <br />
            Hope you Like it!
          </p>
        </div>

        <div className="c2">
          <h3>Useful Links</h3>
          <a href="index.html"><p>Home</p></a>
          <a href="#about-us"><p>About</p></a>
          <a href="./Service/index.html"><p>Service</p></a>
          <a href="./Disclaimer/index.html"><p>Disclaimer</p></a>
          <a href="./Privacy/index.html"><p>Privacy Policy</p></a>
        </div>

        <div className="c3">
          <h3>Need help?</h3>
          <div className="c31">
            <img src={placeholderImg} alt="Location" />
            <p>H-26, Dhanbad, Jharkhand</p>
          </div>
          <div className="c31">
            <img src={emailImg} alt="Email" />
            <p>eduahead123@gmail.com</p>
          </div>
          <div className="c31">
            <img src={phoneImg} alt="Phone" />
            <p>7632804510</p>
          </div>
        </div>

        <div className="c4">
          <h3>Connect with us</h3>
          <div className="c41">
            <FontAwesomeIcon icon={faInstagram} />
            <p>Instagram</p>
          </div>
          <div className="c42">
            <FontAwesomeIcon icon={faYoutube} />
            <p>YouTube</p>
          </div>
          <div className="c43">
            <FontAwesomeIcon icon={faTwitter} />
            <p>Twitter</p>
          </div>
          <div className="c44">
            <FontAwesomeIcon icon={faLinkedin} />
            <a href="https://www.linkedin.com/in/eduahead-in-871116286/"><p>LinkedIn</p></a>
          </div>
        </div>
      </div>

      <div className="copyright">
        Copyright
        <img src={copyrightImg} alt="Copyright" className='small'/>
        2023 All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
