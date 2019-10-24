import React, {Component} from 'react';

class Reset extends Component{
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            fontSize: 10,
        }
    }

    reset = () => {
        this.props.onSet(this.state)
    };

    render() {
        return (
            <div>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}

export default Reset;
