import React from 'react';
import courseCard1 from '../images/course card-1.png';
import courseCard2 from '../images/course card-2.png';
import courseCard3 from '../images/course card-3.png';
import star from '../images/star 1.png';
import piti from '../images/piti.jpg';
import avinash from '../images/avinash.jpg';

const Courses = () => {
  return (
    <div className="courses">
      <div>
        <h1> Upcoming <span>Courses</span></h1>
        <div className="imgLine"></div>
      </div>

      {/* Courses Cards Start */}
      <section className="course-card">

        {/* Course Card 1 */}
        <div className="card card1 card-com">
          <img src={courseCard1} alt="" />
          <div>PRICE : FREE</div>

          <main className="cardName2">

            <main className="piti-pic">
              <img className="piti" src={piti} alt="" />
            </main>

            <main className="star">
              <h2>Priti Bakshi</h2>
              <img className="star-img" src={star} alt="" />
            </main>

          </main>

          <div style={{ backgroundColor: 'white' }} className="maths">
            <h3 className="clas10s">Maths Class-10</h3>
            <p className="hid" style={{ fontSize: '18px', fontWeight: 500, paddingLeft: '12px' }}>This is the best Maths course which contain most important ques</p>
          </div>

          <span className="line-2"></span>

          <div className="actions" style={{ backgroundColor: 'white' }}>
            <h5 className="video">Total Videos : 0</h5>
            <div style={{ backgroundColor: 'white' }}><button>Coming Soon</button></div>
          </div>

        </div>

        {/* Course Card 2 */}
        <div className="card card2 card-com">
          <img src={courseCard2} alt="" />
          <div>PRICE : FREE</div>

          <main className="cardName2">

            <main className="piti-pic">
              <img className="piti" src={avinash} alt="" />
            </main>

            <main className="star">
              <h2>Avinash Kr</h2>
              <img className="star-img" src={star} alt="" />
            </main>

          </main>

          <div style={{ backgroundColor: 'white' }} className="maths">
            <h3 style={{ marginLeft: '16px' }} className="clas10s">Maths Class-12</h3>
            <p className="hid" style={{ fontSize: '18px', fontWeight: 500, marginLeft: '12px' }}>This is the best Science course which contain most important ques</p>
          </div>

          <span className="line-2"></span>

          <div className="actions" style={{ backgroundColor: 'white' }}>
            <h5 className="video">Total Videos : 0</h5>
            <div style={{ backgroundColor: 'white' }}><button>Coming Soon</button></div>
          </div>

        </div>

        {/* Course Card 3 */}
        <div className="card card3 card-com">
          <img src={courseCard3} alt="" />
          <div>PRICE : FREE</div>

          <main className="cardName2">

            <main className="piti-pic">
              <img className="piti" src={piti} alt="" />
            </main>

            <main className="star">
              <h2>Priti Bakshi</h2>
              <img className="star-img" src={star} alt="" />
            </main>

          </main>

          <div style={{ backgroundColor: 'white' }} className="maths">
            <h4 style={{ marginRight: '54px' }} className="clas10s">Paper Presentation Tip</h4>
            <p style={{ fontSize: '18px', fontWeight: 500, marginLeft: '18px' }}>This is the best course where you will learn to write effectively in Exams.</p>
          </div>

          <span className="line-2"></span>

          <div className="actions" style={{ backgroundColor: 'white' }}>
            <h5 className="video">Total Videos : 0</h5>
            <div style={{ backgroundColor: 'white' }}><button>Coming Soon</button></div>
          </div>

        </div>

      </section>
      {/* Courses Cards End */}

    </div>
  );
};

export default Courses;
