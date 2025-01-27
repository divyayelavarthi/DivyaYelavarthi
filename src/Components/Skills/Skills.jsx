import React from 'react'
import './Skills.css'
import python from '../../assets/python.jpg'
import java from '../../assets/java.jpg'
import cplus from '../../assets/cplus.png'
import c from '../../assets/c.png'
import html from '../../assets/html.jpg'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import ts from '../../assets/ts.jpg'
import bs from '../../assets/bootstrap.png'
import angular from '../../assets/angularjs.png'
import react from '../../assets/react.png'
import nodejs from '../../assets/nodejs.jpg'
import php from '../../assets/php.png'
import sb from '../../assets/sb.png'
import mysql from '../../assets/mysql.png'
import oracle from '../../assets/oracle.jpeg'
import pgsql from '../../assets/pgsql.png'
import mdb from '../../assets/mdb.png'
import aws from '../../assets/aws.png'
import gcp from '../../assets/gcp.jpg'

const Skills = () => {
    return (
        <div id="skills" className='skills'>
            <div className="skills-title">
                <h1>Skills</h1>
            </div>
            <div className="skills-container">
                <div className="container">
                    <div className="container-title">
                        <h3>Programming Languages</h3>
                    </div>
                    <div className="pl-img">
                        <img src={python} alt="Skills"/>
                        <img src={java} alt="Skills"/>
                        <img src={cplus} alt="Skills"/>
                        <img src={c} alt="Skills"/>
                    </div>
                </div>
                <div className="container">
                    <div className="container-title">
                        <h3>Web Technologies</h3>
                    </div>
                    <div className="wt-img">
                        <img src={html} alt="Skills"/>
                        <img src={css} alt="Skills"/>
                        <img src={js} alt="Skills"/>
                        <img src={angular} alt="Skills"/>
                        <img src={react} alt="Skills"/>
                        <img src={nodejs} alt="Skills"/>
                        <img src={ts} alt="Skills"/>
                        <img src={bs} alt="Skills"/>
                    </div>
                </div>
                <div className="container">
                    <div className="container-title">
                        <h3>Backend Technologies</h3>
                    </div>
                    <div className="bt-img">
                        <img src={php} alt="Skills"/>
                        <img src={sb} alt="Skills"/>
                    </div>
                </div>
                <div className="container">
                    <div className="container-title">
                        <h3>Databases</h3>
                    </div>
                    <div className="db-img">
                        <img src={mysql} alt="Skills"/>
                        <img src={oracle} alt="Skills"/>
                        <img src={pgsql} alt="Skills"/>
                        <img src={mdb} alt="Skills"/>
                    </div>
                </div>
                <div className="container">
                    <div className="container-title">
                        <h3>Cloud Technologies</h3>
                    </div>
                    <div className="ct-img">
                        <img src={aws} alt="Skills"/>
                        <img src={gcp} alt="Skills"/>
                    </div>
                </div>
                <div className="container">
                    <div className="container-title">
                        <h3>Other Tools</h3>
                    </div>
                    <div className="ot-img">
                        <img src={python} alt="Skills"/>
                        <img src={python} alt="Skills"/>
                        <img src={python} alt="Skills"/>
                        <img src={python} alt="Skills"/>
                        <img src={python} alt="Skills"/>
                        <img src={python} alt="Skills"/>
                        <img src={python} alt="Skills"/>
                        <img src={python} alt="Skills"/>
                        <img src={python} alt="Skills"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills