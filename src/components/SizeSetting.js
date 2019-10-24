import React, {Component} from 'react';

class SizeSetting extends Component{
    constructor(props) {
        super(props);
        this.state = {
            size: this.props.fontSize
        }
    }

    async onSetSize (value) {
        await this.setState({
            size: (this.state.size + value > 4 && this.state.size + value < 30) ? this.state.size + value : this.state.size
        });
        this.props.onChangeSize(this.state.size)
    }

    render() {
        return (
            <div>
                <button onClick={()=>{this.onSetSize(-2)}}>giam size</button>
                <button onClick={()=>{this.onSetSize(2)}}>tăng size</button>
            </div>
        );
    }
}

export default SizeSetting;
