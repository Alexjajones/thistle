var Menu = React.createClass({
    render: function () {
        var menuItems = this.props.items.map(function (item) {
            return <MenuItem item={item}/>
        });

        return (
            <div class="menu">
                {menuItems}
            </div>
        )
    }
});