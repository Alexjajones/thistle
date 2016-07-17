import React, { Component } from 'react'
import { connect } from 'react-redux';

class BagItem extends Component {
    render() {
        var id = this.props.index;

        //{this.props.items[id].name}

        return (
            <div className="bag-item">

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