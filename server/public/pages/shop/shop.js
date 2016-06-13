import React, { Component } from 'react'
import ProductList from '../../components/ProductList/ProductList'

class Shop extends Component {
    render() {
        var products = [{name: 'Lovely Picture', price: '13.41', category: 'Gift Card'}, {
            name: 'Really nice thing',
            price: '2.52',
            category: 'Gift Card',
            id: 0
        }, {name: 'Lovely Picture', price: '13.41', category: 'Gift Card'}, {
            name: 'Really nice thing',
            price: '2.52',
            category: 'Gift Card',
            id: 1
        }, {name: 'Lovely Picture', price: '13.41', category: 'Gift Card'}, {
            name: 'Really nice thing',
            price: '2.52',
            category: 'Gift Card',
            id: 2
        }, {name: 'Lovely Picture', price: '13.41', category: 'Gift Card'}, {
            name: 'Really nice thing',
            price: '2.52',
            category: 'Gift Card',
            id: 3
        }];

        return (
            <div>
                <ProductList items={products}/>
            </div>
        )
    }
}

export default Shop;