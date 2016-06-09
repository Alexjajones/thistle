import React, { Component } from 'react'

class Header extends Component {
    render() {

        return (
            <div className="header-container">
                <div className="top-bar grid">
                    <div className="col-2-3 announcement">
                        FREE SHIPPING FOR ORDERS OVER £75
                    </div>
                    <div className="col-1-3 bag-container">
                        <div className="bag">BAG 0</div>
                    </div>
                </div>
                <div className="logo"></div>
            </div>
        )
    }
}

export default Header