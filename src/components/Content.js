import React, {Component} from 'react';

class Content extends Component{
    setStyle = () => {
        return{
            color: this.props.color,
            fontSize: this.props.fontSize,
        }
    };

    render() {
        return (
            <div>
                <h1 style={this.setStyle()}>hello world!</h1>
            </div>
        );
    }
}

export default Content;
