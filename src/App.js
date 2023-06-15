import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Features from './components/Features/Features';
import Projects from './components/Projects/Project';
import Footer from './components/Footer/Footer';
import FooterBottom from './components/Footer/FooterBottom';
import Resume from './components/Resumes/Resume';
import './App.css';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  return (
    <>
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Resume/>
        <Features />

        <Projects />
         
       <ContactMe/>
  
        <Footer />
        <FooterBottom /> 
      </div>
    </div>
    
    </>
  );
}

export default App;
