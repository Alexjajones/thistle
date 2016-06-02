var MenuItem = React.createClass({displayName: "MenuItem",
    render: function () {
        var item = this.props.item;

        return (
            React.createElement("div", {className: "menu-item"}, 
                React.createElement("div", {className: "menu-item-name"}, item.name)
            )
        )
    }
});