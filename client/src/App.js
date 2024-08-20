import React from 'react';
import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import Category from './components/Category';
// import Courses from './components/Courses';
// import SuccessStory from './components/SuccessStory';
// import MeetOurExperts from './components/MeetOurExperts';
// import FAQSection from './components/FAQSection';
// import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import Login from './components/Linking/Login';
import Signup from './components/Linking/Signup';
import OnlineCompiler from './components/Compiler/OnlineCompiler'
import Btech1 from './components/Categorylink/Btech1'
import Btech2 from './components/Categorylink/Btech2'
import Ide from './components/CodeEditor/Ide'

import './App.css';
import Contact from './components/Linking/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/compiler" element={<OnlineCompiler/>} />
        <Route path="/btech1" element={<Btech1/>} />
        <Route path="/btech2" element={<Btech2/>} />
        <Route path="/ide" element={<Ide/>} />
      </Routes>
      {/* <Navbar />
      <Header />
      <Category />
      <Courses />
      <SuccessStory />
      <MeetOurExperts />
      <FAQSection />
      <Footer /> */}
        {/* <Routes>
          <Route path="/login" element={<SomeOtherComponent />} />
          <Route path="/join-now" element={<SomeOtherComponent />} />
        </Routes> */}
      {/* <Header />
      
     */}
    </div>
  );
}

export default App;