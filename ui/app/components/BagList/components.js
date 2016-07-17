import React, { Component } from 'react'
import { connect } from 'react-redux';

import BagItem from '../BagItem/components'

class BagList extends Component {
    render() {

        var bagItems = this.props.bag.items.map(function (item, i) {
            return <BagItem index={i}/>
        });

        return (
            <div className="bag-list">
                <h1>Shopping Bag</h1>
                {bagItems}
                <div className="total">Total: £{this.props.bag.total}</div>
                <div className="check-out-btn">Go to checkout</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bag: state.bag
    }
};


export default connect(mapStateToProps)(BagList);