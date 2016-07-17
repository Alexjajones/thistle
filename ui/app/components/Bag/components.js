import React, { Component } from 'react'
import { connect } from 'react-redux';

var FontAwesome = require('react-fontawesome');

//shopping-bag
class Bag extends Component {
    render() {
        const { bag } = this.props;

        return (
            <div className="header-bag">
                <div className="bag">
                    <FontAwesome name="shopping-bag"/>
                    BAG {bag.items.length}
                </div>
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