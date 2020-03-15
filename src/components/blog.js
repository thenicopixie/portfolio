import React, { Component } from 'react'
import './components.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMedium
  } from '@fortawesome/free-brands-svg-icons';

class Blog extends Component {
    render() {
        return (
            <div className="blog">
                <h1>Blog</h1>
                <div className="blog-status">
                    <p>Work in progress...</p>
                    <a href="https://medium.com/@thenicopixie" target="blank"><FontAwesomeIcon icon={faMedium} size="2x" /></a>
                </div>
            </div>
        )
    }
}


export default Blog