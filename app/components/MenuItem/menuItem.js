var MenuItem = React.createClass({
    render: function () {
        var item = this.props.item;

        return (
            <div className="menu-item">
                <div className="menu-item-name">{item.name}</div>
            </div>
        )
    }
});