import React from "react";
// import Header from "./Header/Header"
import Profile from "./Profile";
import Footer from "./Footer/Footer";
import './Home.css'
// import Header from "./Header/Header";
export default function Home(){
    return(
        <div className="Home-container">
            {/* <Header/> */}
            <Profile/>
            <Footer/>
        </div>
    )
}