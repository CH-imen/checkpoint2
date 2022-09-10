import './footer.css';

import {BsMouse} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';


function Footer(){
    return(
<div id="footer" className='container footer-container'>
    <h1>That's all
        <a href="#home">
            <h2>
                <BsMouse/>-scroll up-
            </h2>
        </a>
    </h1>
    <div className='social-links'>
        <a href="#">
            <BsInstagram className='social'/>
        </a>

        <a href="#">
            <FaFacebook className='social'/>
        </a>

        
    </div>
</div>

    );
}
export default Footer;
