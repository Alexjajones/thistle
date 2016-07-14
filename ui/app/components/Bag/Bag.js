import React, { Component } from 'react'
import { connect } from 'react-redux';

class Bag extends Component {
    constructor() {
        super();
    }

    render() {
        const { bag } = this.props;

        return (
            <div className="header-bag">
                <div className="bag">BAG {bag.items.length}</div>
            </div>
        )
    }
}

export default connect(state => ({
    bag: state.bag
}))(Bag);