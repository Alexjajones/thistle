import React, { Component } from 'react'
import Bag from '../Bag/components'

class Header extends Component {
    render() {

        return (
            <div className="header-container">
                <img className="logo" src="../../images/logo-header.png" alt="logo"/>
            </div>
        )
    }
}

// <div className="col-1-3 bag-container">
//     <Bag />
// </div>
// <div className="top-bar grid">
//     <div className="col-2-3 announcement">
//         Cathy smells of poop
//     </div>
// </div>

export default Header