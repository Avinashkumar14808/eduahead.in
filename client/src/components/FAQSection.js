import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FAQSection = () => {
  useEffect(() => {
    const questions = document.querySelectorAll('.question-answer');

    questions.forEach((question) => {
      const btn = question.querySelector('.question-btn');
      btn.addEventListener('click', () => {
        questions.forEach((item) => {
          if (item !== question) {
            item.classList.remove('show-text');
          }
        });
        question.classList.toggle('show-text');
      });
    });
  }, []);

  return (
    <div className="container2">
      <div className="c-pic">
        <h1 className="title">Frequently Asked Questions</h1>
      </div>
      <main className="accordion">
        <div className="faq-img">
          <img
            src="https://cdn.pixabay.com/photo/2018/05/17/11/20/faq-3408300_1280.jpg"
            alt="FAQ"
            className="accordion-img"
          />
        </div>
        <div className="content-accordion">
          <div className="question-answer">
            <div className="question">
              <h3 className="title-question">About us</h3>
              <button className="question-btn">
                <span className="up-icon">
                  <FontAwesomeIcon icon={faChevronUp} />
                </span>
                <span className="down-icon">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </button>
            </div>
            <div className="answer">
              <p>
                At EduAhead, We provide you effective learning sources & lectures for classes X, XI, XII & BTech.
                Here, we provide you right guidance, rich content, interactive sessions and confidence to succeed.
              </p>
            </div>
          </div>
          <div className="question-answer">
            <div className="question">
              <h3 className="title-question">Why choose us?</h3>
              <button className="question-btn">
                <span className="up-icon">
                  <FontAwesomeIcon icon={faChevronUp} />
                </span>
                <span className="down-icon">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </button>
            </div>
            <div className="answer">
              <p>
                For the excellent performance of the students in academics and their growth and development in
                life, EduAhead gives you access to many sources like quality notes, amazing lectures and all
                important updates all in one place, free of cost. Our vision is to motivate and inspire the world
                and make them scholar & knowledgeable person.
              </p>
            </div>
          </div>
          <div className="question-answer">
            <div className="question">
              <h3 className="title-question">Is it free of cost?</h3>
              <button className="question-btn">
                <span className="up-icon">
                  <FontAwesomeIcon icon={faChevronUp} />
                </span>
                <span className="down-icon">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </button>
            </div>
            <div className="answer">
              <p>Yes! It's free of cost.</p>
            </div>
          </div>
          <div className="question-answer">
            <div className="question">
              <h3 className="title-question">Who is eligible for these contents?</h3>
              <button className="question-btn">
                <span className="up-icon">
                  <FontAwesomeIcon icon={faChevronUp} />
                </span>
                <span className="down-icon">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </button>
            </div>
            <div className="answer">
              <p>
                These contents like quality notes, important lectures and guidance is meant for classes X, XI, XII
                & BTech students who wish to perform excellent in their academics.
              </p>
            </div>
          </div>
          <div className="question-answer">
            <div className="question">
              <h3 className="title-question">
                Do I need to have a laptop or desktop to do the lecture or can I do it on mobile too?
              </h3>
              <button className="question-btn">
                <span className="up-icon">
                  <FontAwesomeIcon icon={faChevronUp} />
                </span>
                <span className="down-icon">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </button>
            </div>
            <div className="answer">
              <p>
                You can watch the videos and take the benefits of the contents on any device including mobile.
                However, for your convenience, you can use a laptop.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQSection;
