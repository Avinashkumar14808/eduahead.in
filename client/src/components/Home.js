import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Category from './Category';
import Courses from './Courses';
import SuccessStory from './SuccessStory';
import MeetOurExperts from './MeetOurExperts';
import FAQSection from './FAQSection';
import Footer from './Footer';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Category />
      <Courses />
      <SuccessStory />
      <MeetOurExperts />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default Home