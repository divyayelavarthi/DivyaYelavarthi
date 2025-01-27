import React from 'react'
import './Education.css'
import icon from '../../assets/icon.jpg'

const Education = () => {
  return (
    <div id="education" className='edu'>
        <div className='edu-title'>
            <h1>Education</h1>
        </div>
        <div className='edu-sections'>
            <div className='edu-left'>
                <div className='icon'>
                    <img src={icon} alt="Icon" />
                </div>
            <div className='edu-para'>
                    <p>Master's Degree in Computer Science</p>
                    <p>Univeristy of Texas at Arlington</p>
                    <p><em>Jan 2023 - Dec 2024</em></p>
                </div>
            </div>
            <div className='edu-right'>
                    <div className='icon'>
                        <img src={icon} alt="Icon" />
                    </div>
                <div className='edu-para'>
                    <p>Bachelor's Degree in Computer Science</p>
                    <p>Vignan Institute of Technology and Science</p>
                    <p><em>Jul 2017 - Jul 2021</em></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education