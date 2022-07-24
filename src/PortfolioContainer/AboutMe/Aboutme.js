import React from "react";
import Typical from 'react-typical';
import "./Aboutme.css";


export default function aboutme(){
    return(
        
        <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={require('../../assets/Home/tejas.jpg')}
              alt=""
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
          knack of building application with front and back end operations.
          </p>
          <p className="a-desc">
            🔴I'm a developer. <br></br>🔴I had developed sites in MERN stack. I had a knowledge related to API's.Currently Im working on backend part of the web development.<br></br><br></br>
            <b>My Interest</b> <br></br>🔴I'm always interested to make new friends.<br></br>
            🔴 Watching new movies.<br></br>
            🔴 Swiming.
          </p>
          
          
        </div>
      </div>
    
    )
}