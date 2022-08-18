import React from "react";
import { MdCopyright } from "react-icons/md";
import { FaWhatsapp } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import {AiOutlineInstagram ,AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import {HiOutlineMailOpen} from 'react-icons/hi';

function Footer() {
  return (
    <div className="footer-div">
      <hr />
      <footer>
        <div className="travelbuddy">
          <span className="travel">
            TRANCE
          </span>
          <span className="buddy">
           homes
            </span>
        </div>
        <div>
          <span>Copyright </span>{" "}
          <span>
            {" "}
            <MdCopyright />{" "}
          </span>{" "}
          <span>TXC Technologies</span>
        </div>
        <div>
            <h2>CONTACT US</h2>
            <span> <IoCallOutline/> </span> <span>0740769596 </span> <span>||</span> <span> < HiOutlineMailOpen/> </span> <span> michaelmunavu83@gmail.com</span>
        </div>
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/michael-munavu/"><AiFillLinkedin/> </a>
            <a href="https://twitter.com/MichaelTrance1"><AiOutlineTwitter/> </a>
            <a href="https://instagram.com/trance.07?igshid=YmMyMTA2M2Y=">< AiOutlineInstagram/> </a>
            <a href="mailto: michaelmunavu83@gmail.com">< HiOutlineMailOpen/> </a>
            <a href="https://wa.me/254740769596">< FaWhatsapp/> </a>

        
        </div>
      </footer>
    </div>
  );
}

export default Footer;
