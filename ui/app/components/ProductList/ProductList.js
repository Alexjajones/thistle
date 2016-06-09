import React, { Component } from 'react'
import ProductPreview from '../ProductPreview/ProductPreview'

class ProductList extends Component {
    render() {
        var listItems = this.props.items.map(function (item) {
            return <ProductPreview item={item}/>;
        });

        return (
            <div>
                <div className="grid">
                    {listItems}
                </div>
            </div>
        )
    }
}

export default ProductList;