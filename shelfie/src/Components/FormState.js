import React, {Component} from 'react'

export default class FormState extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
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
            imgurl: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.createItem}>
                <input onChange={this.handleInput} type='text' name ='name'placeholder= 'name'/>
                <input onChange={this.handleInput} type='number' name = 'price' placeholder= 'price'/>
                <input onChange={this.handleInput} type='text' name = 'imgurl' placeholder= 'img'/>
                <button type='submit'>Add to Inventory</button>
                </form>
                <button onClick={this.handleCancelClick}>Cancel</button>

            </div>
        )
    }
}