var ProductList = React.createClass({
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
            return <Product item={item}/>;
        });

        return (
            <div>
                <h4>Products</h4>
                <div className="grid">
                    {listItems}
                </div>
            </div>
        )
    }
});