
import './App.css';
import React from 'react';
import Header from "./Component/Profile/Header/Header";
import Navbar from "./Component/Profile/Nav/Nav";
import Profile from "./Component/Profile/ProfilePhoto";
import Members from "./Component/Profile/members/memebers";
import Contact from "./Component/Profile/contact/contact";
import Footer from './Component/Profile/footer/footer';


function App() {
  return (
    <React.Fragment>
  <div className='bg-circle1'></div>
  <div className='bg-circle2'></div>
  <Header/>
  <Navbar/>
  <Profile/>
  
  <Members/>
  <Contact/>
  <Footer/>
  </React.Fragment>
  );
}

export default App;
