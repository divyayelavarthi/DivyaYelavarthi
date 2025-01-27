import React from 'react'
import './Experience.css'
import infosys from '../../assets/infosys.jpg'
import bov from '../../assets/bov.png'

const Experience = () => {
  return (
    <div id="experience" className='exp'>
        <div className='exp-title'>
            <h1>Experience</h1>
        </div>
        <div className='exp-sections'>
            <div className='exp-left1'>
                <img src={infosys} alt="Infosys"/>
            </div>
            <div className='exp-right'>
                <div className='exp-skills'>
                    <div className="exp-skill">
                        <p><em>Senior Systems Engineer | July 2021 - Nov 2022</em></p>
                    </div>
                </div>
                <div className='exp-para'>
                    <ul>
                    <li>Optimized front-end code for large components, using lazy loading and code splitting, reducing page load times and improved application speed by 16%.</li>
                    <li>Collaborated with back-end developers to integrate APIs effectively, using tools such as Postman for testing, ensuring smooth data exchange between the front-end and back-end, reducing API response times by 22%.</li>
                    <li>Resolved cross-browser compatibility issues and rendering inconsistencies in Safari and Edge using the BrowserStack testing tool, ensuring 100% accessibility consistent rendering across all major browsers.</li>
                    <li>Performed rigorous testing, acheiving a 30% bug reduction to ensure a bug-free application before deployment to the production environment.</li>
                    <li>Provided ongoing production support, resolving client-reported issues, with a 90% resolution rate within 24 hours using JIRA for issue tracking, acheiving a high customer satisfaction score.</li>
                    <li>Worked in an agile environment, adapting to frequent scope changes and ensuring high quality deliverables within tight deadlines, improving project completion rate by 15%.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='exp-sections'>
            <div className='exp-left2'>
                <img src={bov} alt="Infosys"/>
            </div>
            <div className='exp-right'>
                <div className='exp-skills'>
                    <div className="exp-skill">
                        <p><em>Machine Learning Engineer Intern | June 2020 - July 2020</em></p>
                    </div>
                </div>
                <div className='exp-para'>
                <ul>
                    <li>Developed a traffic sign recognition model using Convolutional Neural Networks (CNNs), achieving 95% accuracy on a benchmark dataset.</li>
                    <li>Pre-processed and augmented image data with OpenCV and TensorFlow/Keras, improving the robustness of the model and reducing the overfitting by 20%.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience