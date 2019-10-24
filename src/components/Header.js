import React, {Component} from 'react';

class Header extends Component{
    render() {
        return (
            <header>
                <h3>Hello {this.props.tech}</h3>
            </header>
        );
    }
}

export default Header;
