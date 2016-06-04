var Menu = React.createClass({displayName: "Menu",
    render: function () {
        var menuItems = this.props.items.map(function (item) {
            return React.createElement(MenuItem, {item: item})
        });

        return (
            React.createElement("div", {class: "menu"}, 
                menuItems
            )
        )
    }
});