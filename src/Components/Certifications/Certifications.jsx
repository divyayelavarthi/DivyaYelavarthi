import React from 'react'
import './Certifications.css'
import myCertificates_data from '../../assets/mycertifications_data.js' 

const Certifications = () => {
    return (
        <div id="certifications" className='myCertifications'>
            <div className="myCertifications-title">
                <h1>Certifications</h1>
            </div>
            <div className="myCertifications-container">
                {myCertificates_data.map((certificates)=>{
                    return <img src={certificates.c_img} alt="Certificates"/>
                })}
            </div>
        </div>
    )
}

export default Certifications