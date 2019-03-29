import React, {Component} from 'react'
import Productfun from './Productfun' 

export default class Dashboardfun extends Component {
    render () {
        const theInventory = this.props.products.map((product, i) => (
        <div key={product.id++}>
            <p key={product.id++}>{product.name}</p>
            <p key={product.id++}>{product.price}</p>
            <img key={product.id++} src= {product.img} alt='a rock'/>
        </div>
        ))
        return (
            <div>
                <h1>Dashboard</h1>
                {theInventory}
                <Productfun theInventory={theInventory}/>
            </div>
        )
    }
}