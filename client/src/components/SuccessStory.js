import React, { useEffect } from 'react';
import studentsImage from '../images/students.webp';
import notesIcon from '../images/notes icon.png';
import awardImage from '../images/award.png';
import teacherImage from '../images/teacher.jpg';

const SuccessStory = () => {
  // useEffect(() => {
  //   // Function to initialize counterUp
  //   const initCounterUp = () => {
  //     const counters = document.querySelectorAll('.counter');
  //     counters.forEach(counter => {
  //       const updateCount = () => {
  //         const target = +counter.getAttribute('data-target');
  //         const count = +counter.innerText;
  
  //         // Lower is the time it takes
  //         const speed = 100;
  
  //         const inc = target / speed;
  
  //         if (count < target) {
  //           counter.innerText = Math.ceil(count + inc);
  //           setTimeout(updateCount, 1);
  //         } else {
  //           counter.innerText = target;
  //         }
  //       };
  
  //       updateCount();
  //     });
  //   };
  
  //   // Initialize counterUp on component mount
  //   initCounterUp();
  // }, []); // Empty array ensures this effect runs only on mount
  
  return (
    <div className="story" id="about-us">
      <div className="bg">
        <h1>About Our Success Story</h1>

        <div className="story-card trans">
          <div className="story-card-1 story-card-common">
            <img src={studentsImage} alt="Students" />
            <div className="counter" data-target="100000">0</div>
            <p>STUDENTS</p>
            <span></span>
          </div>
          <div className="story-card-2 story-card-common">
            <img src={notesIcon} alt="Notes PDF" />
            <div className="counter" data-target="100">0</div>
            <p>NOTES PDF</p>
            <span></span>
          </div>
          <div className="story-card-3 story-card-common">
            <img src={awardImage} alt="Achievements" />
            <div className="counter" data-target="3">0</div>
            <p>ACHIEVEMENTS</p>
            <span></span>
          </div>
          <div className="story-card-3 story-card-common">
            <img src={teacherImage} alt="Experts" />
            <div className="counter" data-target="2">0</div>
            <p>EXPERTS</p>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
