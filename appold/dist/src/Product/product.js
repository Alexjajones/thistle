var Product = React.createClass({displayName: "Product",
    render: function () {
        var item = this.props.item;

        return (
            React.createElement("div", {className: "product col-1-4"}, 
                React.createElement("div", {className: "product-inner"}, 
                    React.createElement("div", {className: "product-name"}, item.name), 
                    React.createElement("div", {className: "product-category"}, item.category), 
                    React.createElement("img", {src: "test-product.jpg", alt: "Product image"}), 
                    React.createElement("p", {className: "product-price"}, '£' + item.price)
                )
            )
        )
    }
});