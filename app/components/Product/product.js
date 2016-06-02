var Product = React.createClass({
    render: function () {
        var item = this.props.item;

        return (
            <div className="product col-1-4">
                <div className="product-inner">
                    <div className="product-name">{item.name}</div>
                    <div className="product-category">{item.category}</div>
                    <img src="test-product.jpg" alt="Product image"/>
                    <p className="product-price">{'£' + item.price}</p>
                </div>
            </div>
        )
    }
});