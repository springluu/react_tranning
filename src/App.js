import React, {Component} from 'react';
import './App.css'
import Header from './components/Header'
import Product from './components/Product'

class App extends Component{
    onClick() {
        alert(9)
    }

    render() {
        let products = [
            { id: 1, name : 'Iphone 11 pro max', price: 9999, status: true },
            { id: 2, name : 'Iphone 11 pro', price: 999, status: true },
            { id: 3, name : 'Iphone 11', price: 99, status: true },
            { id: 4, name : 'Iphone 12', price: 0, status: false },
        ]

        let elements = products.map((product, index) => {
            if (product.status) {
                return (
                    <Product key={index} name={product.name} price={product.price}>
                        New
                    </Product>
                )
            }
        })

        return (
            <div className="App">
                <Header/>
                <hr/>
                { elements }
                <button onClick={this.onClick}>Click me</button>
            </div>
        )
    }
}

export default App
