import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faPaperPlane, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Contact.css'; // Import your CSS for styling

const Contact = () => {
  return (
    <section id="section-wrapper">
      <div className="box-wrapper">
        <div className="info-wrap">
          <h2 className="info-title">Contact Information</h2>
          <h3 className="info-sub-title">
            Fill up the form and our Team will get back to you within 24 hours
          </h3>
          <ul className="info-details">
            <li>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span>Phone:</span> <a href="tel:+1235235598">+1235235598</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>Mail:</span>{' '}
              <a href="mailto:eduahead123@gmail.com">eduahead123@gmail.com</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faGlobe} />
              <span>Website:</span> <a href="#">eduahead.in</a>
            </li>
          </ul>
          <ul className="social-icons">
            <li>
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </li>
          </ul>
        </div>
        <div className="form-wrap">
          <form action="https://formspree.io/f/xwkdkako" method="POST">
            <h2 className="form-title">Send us a message</h2>
            <div className="form-fields">
              <div className="form-group">
                <input
                  type="text"
                  name="Name"
                  className="fname"
                  placeholder="Name*"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="Email"
                  className="email"
                  placeholder="Mail*"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Write your message*"
                  required
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              value="Send Message"
              className="submit-button"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
