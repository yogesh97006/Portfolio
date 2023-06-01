import React from "react";
import "./Contact.css";
import mes from "../../Images/mes.png";
import {
  GitHub,
  LinkedIn,
  Mail,
  Phone,
  Place,
  Twitter,
} from "@mui/icons-material";

function Contact() {
  return (
    <div>
    <h1 style={{textAlign:'center',margin:'50px 0 -70px 0',color:'white'}}>Contact</h1>
      <div className="ci">
        <div>
          <img src={mes} alt="img" className="cimg" />
        </div>
        <div className="citems">
       
          <div className='cii' >
            <div>
              <Phone fontSize="large" style={{ color: "#91ff35" }} />
            </div>
            <div>
              <p className="cp" onClick={''}>:  +91-9700608931</p>
            </div>
          </div>
          <div className='cii' >
            <div>
              <Mail fontSize="large" style={{ color: "#f73378" }} />
            </div>
            <div>
              <p className="cp" onClick={''}>:  yogeshsaini0709@gmail.com</p>
            </div>
          </div>
          <div className='cii' >
            <div>
              <Twitter fontSize="large" style={{ color: "#33bfff" }} />
            </div>
            <div>
              <p className="cp" onClick={''}>:  Twitter</p>
            </div>
          </div>
          <div className='cii' >
            <div>
              <LinkedIn fontSize="large" style={{ color: "#1c54b2" }} />
            </div>
            <div>
              <p className="cp" onClick={''}>:  LinkedIn</p>
            </div>
          </div>
          <div className='cii' >
            <div>
              <GitHub fontSize="large" style={{ color: "#ffffff" }} />
            </div>
            <div>
              <p className="cp" onClick={''}>:  GitHub</p>
            </div>
          </div>
          <div className='cii' >
            <div>
              <Place fontSize="large" style={{ color: "#ffee33" }} />
            </div>
            <div>
              <p className="cp">:  Hyderabad,Telangana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
