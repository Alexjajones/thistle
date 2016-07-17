import React, { Component } from 'react'
import { connect } from 'react-redux';
var FontAwesome = require('react-fontawesome');

import bag from '../Bag';

class BagItem extends Component {
    render() {
        var id = this.props.index;
        this.item = this.props.items[id];

        return (
            <div className="bag-item">
                <div className="item-image-container">
                    <img className="item-image" src={this.item.image}/>
                </div>
                <div className="item-details-container">
                    <div className="item-name">{this.item.name} </div>
                    <div className="item-category">{this.item.category} </div>
                    <div className="item-category">Quantity 3</div>
                    <div onClick={this.removeProduct.bind(this)}>
                        Remove <FontAwesome name="times"/>
                    </div>
                </div>
            </div>
        )
    }

    removeProduct() {
        this.props.remove(this.item)
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.bag.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (product) => {
            dispatch(bag.actions.remove(product));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BagItem);