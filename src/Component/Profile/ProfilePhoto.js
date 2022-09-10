import React from "react";
import './ProfilePhoto.css';
import Buttons from './Button/button';
import Name from './FullName';
import Address from './Address';
import {BsMouse} from 'react-icons/bs';




function Profile() {
    return (
        <div id='home' className='container home-container'>
            <div className="logo">
            <div className="main-img">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>

            </div>
            <img src='./image-profile.jpg' alt=""></img>
            
            </div>
            <Name/>
            <Address/>
            
            <a href="#footer" className="scroll-down">
                <hr/>
                <h5>scroll down</h5>
                <BsMouse className='scroll'/>
                <hr/>
            </a>
            <h2><span>About Me</span><br/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book.
            </p>
            </h2>
            <Buttons/>
        </div>
    );
}
const toggle = document.querySelector('.main-img');
toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
    });
   export default Profile;