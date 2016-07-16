import React, { Component } from 'react'
import { connect } from 'react-redux';

import bag from '../Bag';

class Product extends Component {
    constructor() {
        super();
    }

    render() {
        var product = this.props.product;

        console.log(product);

        return (
            <div className="grid single-product">
                <div className="col-2-3 product-image-container">
                    <img className="product-image" src={product.image}/>
                </div>
                <div className="col-1-3 product-details">
                    <div className="price">£{product.price}</div>
                    <p className="product-detail header">{product.name}</p>
                    <p className="product-detail category">{product.category}</p>
                    <p className="product-detail category">{product.description}</p>
                    <p className="product-detail category">{product.format}</p>
                    <p className="product-detail category">Made in England</p>
                    <div className="btn add-to-cart" onClick={this.addProduct.bind(this)}>ADD TO BAG</div>
                </div>
            </div>
        )
    }

    addProduct() {
        this.props.onClick(this.props.product);
    }
}

const mapStateToProps = (state) => {
    return {
        bag: state.bag
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (product) => {
            dispatch( bag.actions.add(product) );
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);