import React, { Component } from 'react'

class Product extends Component {
    componentWillMount() {
        this.setState({
            id: this.props.params.id
        })
    }

    render() {
        return (
            <h4>Product {this.state.id}</h4>
        )
    }
}

export default Product;