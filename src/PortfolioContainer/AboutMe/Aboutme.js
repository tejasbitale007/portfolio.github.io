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
        {/* {" "}
          <Typical
            loop={Infinity}
            steps={[
              "About Me .....",
              10000,
              "About Me .....",
              10000,
            ]}/> */}
          <h1 className="a-title">
          {" "}
          <Typical
            loop={onpageshow}
            steps={[1000,
              "About Me .....",
              1000,
              "I am a Enthusiastic , dedicated CSE Student.",
              10000,
              
            ]}/></h1>
          <p className="a-sub">
          I am hardworking and proactive student with having strong coding skills. I have good knowledge about <br></br>the technologies. Apart From that Im good in Core Java. talking towords my Non-technical skills that I am having good leadership qualities, and 
          I am good in time management.
          </p>
          <p className="a-desc">
            --> I am a web developer. <br></br>--> Languages - HTML, CSS , Javascript , C , Core Java .<br></br>--> Databases- MYSQL , MONGODB <br></br><br></br>
            <b>My Interest</b> <br></br>--> I am always interested to make new friends.<br></br>
            --> Visiting Different places.<br></br>
            --> Swiming.
          </p>
          
          {/* <div className="video">
            <a href=""
          </div> */}
        </div>
      </div>
    
    )
}