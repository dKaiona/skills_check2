import React, {Component} from 'react'
import axios from 'axios';

export default class FormState extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: 0,
            img: ''
        }
    }

    handleInput = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value})
    }

    handleCancelClick = (event) => {
        this.setState({
            name: '',
            price: 0,
            img: ''
        })
    }
        createItem = (event) => {
            event.preventDefault()
            axios.post('/api/product', this.state)
            .then(res => {
                this.setState({
                    name: '',
                    price: 0,
                    img: ''
                })
            })
            .catch(err => console.log('failed in formstate', err))
        }

        
        
        render() {
            const didMount = this.props.getRequest()
        return(
            <div className = 'form'>
                <form onSubmit={this.createItem}>
                <input onChange={this.handleInput} type='text' name ='name'placeholder= 'name'/>
                <input onChange={this.handleInput} type='number' name = 'price' placeholder= 'price'/>
                <input onChange={this.handleInput} type='text' name = 'img' placeholder= 'img'/>
                <button type='submit'>Add to Inventory</button>
                </form>
                <button onClick={this.handleCancelClick}>Cancel</button>

            </div>
        )
    }
}