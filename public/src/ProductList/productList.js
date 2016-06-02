var ProductList = React.createClass({displayName: "ProductList",
    getDefaultProps: function () {
        return {
            items: []
        }
    },
    add: function(friend) {
        this.setState({
            items: this.props.items.concat(friend)
        })
    },
    render: function () {
        var listItems = this.props.items.map(function (item) {
            return React.createElement(Product, {item: item});
        });

        return (
            React.createElement("div", null, 
                React.createElement("h4", null, "Products"), 
                React.createElement("div", {className: "grid"}, 
                    listItems
                )
            )
        )
    }
});