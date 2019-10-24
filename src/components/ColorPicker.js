import React, {Component} from 'react';

class ColorPicker extends Component{
    constructor(props) {
        super(props);
        this.state = {
            colors: ['blue', 'red', 'green', 'yellow']
        }
    }

    showColor = (color) => {
        return {
            backgroundColor: color,
            marginRight: 10,
        }
    };

    setColor(color) {
        this.props.onReColor(color)
    };

    render() {
        let colors = this.state.colors.map((color, index)=>{
            return (
                <span
                    className={this.props.color === color ? 'active' : ''} key={index} style={this.showColor(color)}
                    onClick={() => {this.setColor(color)}}
                >{color}</span>
            );
        });
        return (
            <div>
                {colors}
            </div>
        );
    }
}

export default ColorPicker;
