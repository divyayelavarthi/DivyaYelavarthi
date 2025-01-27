import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className='about-title'>
            <h1>About me</h1>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={profile_img} alt="Profile_img"/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>Graduated with a Master's degree in Computer Science from the University of Texas at Arlington, with 2 years of professional experience as a Senior Systems Engineer at Infosys.</p>
                    <p>Proficient in JavaScript, AngularJS, and React, with working knowledge of Java, Python, and MySQL.</p>
                </div>
                <div className='about-skills'>
                    <div className="about-skill">
                        <p>Full-Stack Developer | Master's in Computer Science | Ex-Infoscian</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About