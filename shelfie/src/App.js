import React, { Component } from 'react';
import axios from 'axios'
import {HashRouter, Link} from 'react-router-dom'

import './App.css';
import Header from './Components/Headerfun'
import Form from './Components/FormState'
import Dashboard from './Components/Dashboardfun'

class App extends Component {
constructor() {
  super()
  this.state = {
    products: []
  }
}

componentDidMount = () => {
  axios.get('/api/inventory')
  .then(res => {
    this.setState({products: res.data})
  })
  .catch(err => console.log('error did not mount', err))
}

  render() {
    return (
      <HashRouter>
      <div className="App">
      <Header/>
      <section className = 'flexThem'>
      <Dashboard products={this.state.products} />
      <Form getRequest={this.componentDidMount}/>
      </section>
      </div>
      </HashRouter>
    );
  }
}

export default App;
