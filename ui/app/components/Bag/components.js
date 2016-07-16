import React, { Component } from 'react'
import { connect } from 'react-redux';

class Bag extends Component {
    render() {
        const { bag } = this.props;

        return (
            <div className="header-bag">
                <div className="bag">BAG {bag.items.length}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bag: state.bag
    }
};


export default connect(mapStateToProps)(Bag);