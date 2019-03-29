import React, {Component} from 'react'
import Productfun from './Productfun'
import axios from 'axios' 

export default class Dashboardfun extends Component{
    constructor(props) {
        super(props)

        this.state = {
            id: 0
        }
    }
    
    deleteItem = () => {
        axios.delete(`/api/inventory?id=${this.props.products}`)
        console.log(111111, this.props.products)
    }
    render () {
        const theInventory = this.props.products.map((product, i) => (
        <div key={product.id++}>
            <p key={product.id++}>{product.name}</p>
            <p key={product.id++}>${product.price}</p>
            <img key={product.id++} src= {product.img} alt='a rock'/>
            <button onClick={this.deleteItem}>Delete</button>
            <button>Edit</button>
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