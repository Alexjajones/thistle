import React, { Component } from 'react'
import { connect } from 'react-redux';

import ProductList from '../../components/ProductList/ProductList'

class Shop extends Component {
    render() {

        return (
            <div>
                <ProductList items={this.props.products}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

export default connect(mapStateToProps)(Shop);