import React, { Component } from 'react'
import ApiProduct from '../../api/Product'
import { connect } from 'react-redux';

class Product extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.setState({
            product: {
                name: 'Really nice thing',
                price: '2.52',
                category: 'Gift Card',
                format: '10cm x 20cm',
                description: '10 cards',
                id: 0,
                image: 'https://m.riflepaperco.com/media/catalog/product/cache/1/thumbnail/1170x1248/fb193eecb19491ee2d70d1d38e002e96/g/c/gct027-01_1.jpg'
            }
        })
    }

    render() {
        var product = this.state.product;

        return (
            <div className="grid single-product">
                <div className="col-2-3 product-image-container">
                    <img className="product-image" src={product.image}/>
                </div>
                <div className="col-1-3 product-details">
                    <div className="price">£{product.price}</div>
                    <p className="product-detail header">{product.name}</p>
                    <p className="product-detail category">{product.category}</p>
                    <p className="product-detail category">{product.description}</p>
                    <p className="product-detail category">{product.format}</p>
                    <p className="product-detail category">Made in England</p>
                    <div className="btn add-to-cart" onClick={this.addProduct.bind(this)}>ADD TO BAG</div>
                </div>
            </div>
        );
    }

    addProduct() {
        this.props.onClick(this.state.product);
    }
}

const mapStateToProps = (state) => {
    return {
        bag: state.bag
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (product) => {
            dispatch({type: "ADD_ITEM", item: product})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);