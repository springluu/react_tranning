import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Content from './components/Content';

class AppColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            fontSize: 10,
        };
    }
    onSetColor = (params) =>{
        this.setState({
            color: params
        })
    };

    onChangeSize = (params) =>{
        this.setState({
            fontSize: params
        })
    };

    setDefault = (params) =>{
        this.setState({
            color: params.color,
            fontSize: params.fontSize,
        })
    };

    render() {
        return (
            <div className="App">
                <Header/>
                <hr/>
                <ColorPicker color={this.state.color} onReColor={this.onSetColor}/>
                <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize}/>
                <Reset onSet={this.setDefault}/>
                <Content color={this.state.color} fontSize={this.state.fontSize}/>
            </div>
        )
    }
}

export default AppColor
