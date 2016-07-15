import React, { Component } from 'react'
import { Link } from 'react-router'

class ProductPreview extends Component {
    constructor() {
        super();
    }

    render() {
        var item = this.props.item;

        return (
            <div className="product col-1-4">
                <Link to={`/shop/${item.id}`}>
                    <div className="product-inner">
                        <div className="product-name">{item.name}</div>
                        <div className="product-category">{item.category}</div>
                        <img src="images/test-product.jpg" alt="Product image"/>
                        <p className="product-price">{'£' + item.price}</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ProductPreview;