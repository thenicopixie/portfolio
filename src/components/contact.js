import React, { Component } from 'react'
import Social from './social';


class Contact extends Component {
    render() {
        return (
            <div className="info">
                <h1>Ways to contact me</h1>
                <Social></Social>
            </div>
        )
    }
}


export default Contact