import React, { Component } from 'react'
import "./components.css";

class Introduction extends Component {
    render() {
        return (
            <div className="introduction">
                <h1>Hello! I'm Nicole</h1>
                <p>I am a Software Engineer based in Tulsa, Oklahoma. I love to solve problems and help others. In my free time I'm coding, creating music, illustrating, and learning new technologies. </p>
                <div className="resume-link">
                    <a href="https://docs.google.com/document/d/e/2PACX-1vQJzFIiQ5v2iQmm5fW5SCz2gYoLkS4eWwILTO6qGPWd2IBFL-PZOLGo_DmmClLKBw_SPbK3RGowzges/pub" target="blank">Resume/CV</a>
                </div>
            </div>
        )
    }
}


export default Introduction