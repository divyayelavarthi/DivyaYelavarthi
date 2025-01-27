import React from 'react'
import './Projects.css'
import Projects_Data from '../../assets/projects_data'

const Projects = () => {
    return (
        <div id="projects" className='services'>
            <div className="services-title">
                <h1>Projects</h1>
            </div>
            <div className="services-container">
                {Projects_Data.map((projects,index)=>{
                    return <div key={index} className='services-format'>
                        <div className='services-format-title'>
                        <h3>{projects.p_no}</h3>
                        <h2>{projects.p_name}</h2>
                        </div>
                        <p>{projects.p_desc}</p>
                        <p>{projects.p_tech}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Projects