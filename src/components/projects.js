import React, { Component } from 'react'

import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';

import './components.css';

class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <div className="project-box sherlock">
                    <div className="project-content">
                        <h4>Sherlock</h4>
                        <p>Tool for users to use internal search as a service</p>
                    </div>
                </div>
                <div className="project-box eve">
                    <div className="project-content">
                        <h4>Eve - Fasttext nlp</h4>
                        <p>Natural language processor to predict topic tags for given content</p>
                    </div>
                </div>
                <div className="project-box einstein">
                    <div className="project-content">
                        <a href="https://www.einsteinstudios.io/" target="blank"><FontAwesomeIcon icon={faInfoCircle} size="lg" /></a>
                        <h4>Einstein Studios</h4>
                        <p>A VR educational web platform aimed at students with dyslexia</p>
                    </div>
                </div>
                <div className="project-box rawls">
                    <div className="project-content">
                        <a href="https://github.com/Rd-Feng/Project_RAWLS" target="blank"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                        <h4>Project RAWLS</h4>
                        <p>Blockchain web app where users can opt in to monetize their data</p>
                    </div>
                </div>
                <div className="project-box backrow">
                    <div className="project-content">
                        <a href="https://github.com/thenicopixie/BackRow" target="blank"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                        <a href="https://youtu.be/E9AlMJYBv_I" target="blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                        <h4>BackRow</h4>
                        <p>Platform for presenting Google Slides with question board</p>
                    </div>
                </div>
                <div className="project-box hbnb">
                    <div className="project-content">
                        <a href="https://github.com/thenicopixie/AirBnB_clone_v4" target="blank"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                        <h4>HBnB</h4>
                        <p>Lodging and homestay listings</p>
                    </div>
                </div>
                <div className="project-box monty">
                    <div className="project-content">
                        <a href="https://github.com/thenicopixie/monty" target="blank"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                        <h4>Monty</h4>
                        <p>Stack and Queue constructor</p>
                    </div>
                </div>
                <div className="project-box shell">
                    <div className="project-content">
                        <a href="https://github.com/thenicopixie/simple_shell" target="blank"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                        <h4>Simple Shell</h4>
                        <p>Simple Bash Shell clone</p>
                    </div>
                </div>
                <div className="project-box printf">
                    <div className="project-content">
                        <a href="https://github.com/thenicopixie/printf" target="blank"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                        <h4>Printf</h4>
                        <p>Implementation of printf from the C programming language</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Projects