import React, { Component } from 'react'
import Social from './social';
import "./components.css"
import nicole from './nicole.JPG';

class About extends Component {
    render() {
        return (
            <div className="info-container">
                <h1>About Me</h1>
                <div className="about-info">
                    <div className="about">
                        <p>Hello there! I'm Nicole Swanson. I am a Software Engineer based in Tulsa, Oklahoma. 
                            Born and raised in Minnesota, I was homeschooled alongside my 6 siblings. 
                            Growing up in this environment taught me to be collaborative, creative, intuitive, driven, and focused. 
                            I have always had a knack for creativity and solving problems. 
                            I was introduced to the world of technology and software engineering, and decided to pursue a career in technology to be able to use my talent to help others.
                            Soon after, I started self-learning programming languages and later attended a software engineering school where I developed through peer and project based learning. I spent over a year teaching myself to code in various programming languages.
                            Recently I interned at Life.Church Youversion as an API Software Engineer where I helped develop their upcoming discovery feature.</p>
                    </div>
                        <div className="info-column">
                        <div className="profile-image">
                        <img src={nicole} alt="girl near bamboo plants." />
                        </div>
                    </div>
                </div>
                <h2>Skills</h2>
                <div className="skills-container">
                    
                    <div className="skills-column">
                        <li > Python </li>
                        <li> JavaScript </li>
                        <li> C </li>
                    </div>
                    <div className="skills-column">
                        <li> React.js </li>
                        <li> Node.js </li>
                        <li> Locust </li>
                    </div>
                    <div className="skills-column">
                        <li> Flask </li>
                        <li> Django </li>
                        <li> jQuery </li>
                    </div>
                    <div className="skills-column">
                        <li> Requests </li>
                        <li> fastText </li>
                        <li> Git </li>
                    </div>
                    <div className="skills-column">
                        <li> Docker </li>
                        <li> MySQL </li>
                        <li> PostgreSQL </li>
                    </div>
                </div>
                <Social></Social>
            </div>
        )
    }
}


export default About