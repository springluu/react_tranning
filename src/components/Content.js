import React, {Component} from 'react';

class SizeSetting extends Component{
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onSetColor = () => {
    }

    render() {
        return (
            <div>
                <button onClick={this.onMinus}>giam size</button>
                <button onClick={this.onPlus}>tăng size</button>
            </div>
        );
    }
}

export default SizeSetting;
