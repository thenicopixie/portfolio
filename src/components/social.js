import React, { Component } from 'react'
import "./components.css";


import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faTwitter,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons';

class Social extends Component {
    render() {
        return (
            <div className="social-links">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <p><a href="mailto: nicole.swanson@mail.com"><FontAwesomeIcon icon={faEnvelope} size="lg" /></a></p>
                <p><a href="https://github.com/thenicopixie" target="blank"><FontAwesomeIcon icon={faGithub} size="lg" /></a></p>
                <p><a href="https://www.linkedin.com/in/nicolecswanson/" target="blank"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a></p>
                <p><a href="https://twitter.com/Nicolette_Swan" target="blank"><FontAwesomeIcon icon={faTwitter} size="lg" /></a></p>
                <p><a href="https://www.instagram.com/the_coding_pixie/" target="blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a></p>
            </div>
        )
    }
}


export default Social