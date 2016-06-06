import React, { Component } from 'react'
import { withRouter } from 'react-router'

class ProductPreview extends Component {
    render() {
        var item = this.props.item;
        var $this = this;

        return (
            <div className="product col-1-4">
                <div className="product-inner" onClick={() => {this.goToPage($this, item)}}>
                    <div className="product-name">{item.name}</div>
                    <div className="product-category">{item.category}</div>
                    <img src="images/test-product.jpg" alt="Product image"/>
                    <p className="product-price">{'£' + item.price}</p>
                </div>
            </div>
        )
    }

    goToPage($this, item) {
        $this.props.router.push('/shop/' + item.id);
    }
}

export default withRouter(ProductPreview);