import React, { Component } from 'react'
import Introduction from "./introduction"
import Social from './social'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Introduction></Introduction>
                <Social></Social>
            </div>
        )
    }
}


export default Home