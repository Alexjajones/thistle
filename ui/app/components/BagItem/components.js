import React, { Component } from 'react'
import { connect } from 'react-redux';
var FontAwesome = require('react-fontawesome');

class BagItem extends Component {
    render() {
        var id = this.props.index;
        var item = this.props.items[id];

        return (
            <div className="bag-item">
                <div className="item-image-container">
                    <img className="item-image" src={item.image}/>
                </div>
                <div className="item-details-container">
                    <div className="item-name">{item.name} </div>
                    <div className="item-category">{item.category} </div>
                    <div className="item-category">Quantity 3 </div>
                    Remove <FontAwesome name="times"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.bag.items
    }
};

export default connect(mapStateToProps)(BagItem);