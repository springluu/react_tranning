import React, {Component} from 'react';

class Product extends Component{
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick () {
        alert(this.props.name)
    }

    render() {
        return (
            <div>
                {this.props.children}
                <h5>{this.props.name}</h5>
                <span>{this.props.price}$</span>
                <div>
                    <button className={'btn'} onClick={ this.onClick }> Action </button>
                </div>
                ---------------------------
            </div>
        );
    }
}

export default Product;
