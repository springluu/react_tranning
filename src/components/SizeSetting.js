import React, {Component} from 'react';

class ColorPicker extends Component{
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onSetColor = () => {
    }

    render() {
        return (
            <div>
                <button onClick={this.onSetColor} value={'red'}>red</button>
                <button onClick={this.onSetColor} value={'blue'}>blue</button>
                <button onClick={this.onSetColor} value={'yellow'}>yellow</button>
                <button onClick={this.onSetColor} value={'green'}>green</button>
            </div>
        );
    }
}

export default ColorPicker;
