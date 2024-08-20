import React, { useEffect } from 'react';
import class10Img from '../images/class-10 final 1.png';
import class11Img from '../images/class-11-final.png';
import class12Img from '../images/class-12 final 1.png';
import btech1Img from '../images/BTech-1-bit 1.png';
import btech2Img from '../images/BTech-2.png';
import boardUpdatesImg from '../images/Board updates.png';
import { Link } from 'react-router-dom';

const Category = () => {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        } else {
          reveal.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);

    // Run reveal once on component mount
    reveal();

    // Clean up event listener on component unmount
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="category" id="category-2">
      <div className="container">
        <p>Notes & Important Questions Category</p>
        <div>
          <h1>Quality <span>Handwritten</span> Notes</h1>
          <div className="imgLine"></div>
        </div>
        <div className="catBox1">
          <div className="box1 box reveal fade-left">
            <div></div>
            <img src={class10Img} alt="Class 10" width="55px" height="52px" />
            <Link to="/ide">
              <article>
                <h2>CodeEditor</h2>
                <p>IDE</p>
              </article>
            </Link>
          </div>
          <div className="box2 box reveal fade-bottom">
            <div></div>
            <img src={class11Img} alt="Class 11" width="55px" height="52px" />
            <a href="Class-12/index.html">
              <article>
                <h2>Class-12</h2>
                <p>2024 Exam</p>
              </article>
            </a>
          </div>
          <div className="box3 box reveal fade-right">
            <div></div>
            <img src={class12Img} alt="Class 12" width="55px" height="52px" />
            <Link to="/compiler">
              <article>
                <h2>Compiler</h2>
                <p>Solve DSA Ques</p>
              </article>
            </Link>  
          </div>
        </div>
        <div className="catBox1">
          <div className="box4 box reveal fade-left">
            <div></div>
            <img src={btech1Img} alt="BTech 1" width="42px" height="58px" />
            <Link to="/btech1">
              <article>
                <h2>BTech</h2>
                <p>1st & 2nd Sem</p>
              </article>
            </Link>
          </div>
          <div className="box5 box reveal fade-bottom">
            <div></div>
            <img src={btech2Img} alt="BTech 2" width="55px" height="50px" />
            <Link to="/btech2">
              <article>
                <h2>BTech</h2>
                <p>3rd & 4th Sem</p>
              </article>
            </Link>
          </div>
          <div className="box6 box reveal fade-right">
            <div></div>
            <img src={boardUpdatesImg} alt="Board Updates" width="55px" height="52px" />
            <a href="CBSE-Update/index.html">
              <article>
                <h2 className="update">CBSE Board <br /> Updates </h2>
              </article>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
