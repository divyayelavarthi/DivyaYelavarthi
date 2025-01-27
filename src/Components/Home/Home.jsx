import React from 'react'
import './Home.css'
import profile_img from '../../assets/profile_img.jpg'

const Home = () => {
    return (
        <div id='home' className='home'>
            <img src={profile_img} alt="Profile_Image"/>
            <h1>Welcome to a Glimpse of My Journey!<br/><span> I am Divya Yelavarthi,</span></h1>
            <p>Full-Stack Developer</p>
            <div className='home-action'>
                <div className="home-connect">
                  Connect with me 
                </div>
                <div className="home-resume">
                    My Resume
                </div>
            </div>
        </div>
    )
}

export default Home