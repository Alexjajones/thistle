import React, { Component } from 'react'
import { connect } from 'react-redux';

class BagItem extends Component {
    render() {

        var id = this.props.index;

        console.log(this.props.items, id);

        return (
            <div className="bag-item">{this.props.items[id].name}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.bag.items
    }
};

export default connect(mapStateToProps)(BagItem);