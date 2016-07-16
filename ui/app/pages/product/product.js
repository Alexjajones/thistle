import React, { Component } from 'react'
import { connect } from 'react-redux';

import bag from '../../components/Bag/index';
import Product from '../../components/Product/Product';

class ProductPage extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
    }

    render() {
        return (
            <div>
                <Product product={this.props.product}/>
            </div>
        );
    }
}

const mapStateToProps = (state, { params }) => {
    return {
        product: bag.selectors.get(params.id, state.products)
    }
};

export default connect(mapStateToProps)(ProductPage);