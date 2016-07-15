import React, { Component } from 'react'
import { connect } from 'react-redux';

import Product from '../../components/Product/Product';

class ProductPage extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        var products = this.props.products;
        var id = this.props.params.id;

        this.item = products.filter((item) => {
            return item.id == id
        })[0];
    }

    render() {
        return (
            <div>
                <Product product={this.item}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

export default connect(mapStateToProps)(ProductPage);