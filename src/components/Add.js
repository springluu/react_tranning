import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class Add extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            point: '',
        };

        this.exampleRef = React.createRef()
    }

    save =()=> {
        this.props.onSave({
            name: this.name.value,
            point: this.point.value,
        });
    };

    cancel =()=> {
        this.name.value = '';
        this.point.value = '';
    };

    render() {
        return (
            <div className={'form-group mb-3 mt-3'}>
                <div className={'mb-3 mt-3'}>
                    <label>Name:</label>
                    <input className={'form-control'} type={'text'} ref={element => this.name = element}/>
                    <label>Point:</label>
                    <input className={'form-control'} type={'text'} ref={element => this.point = element}/>
                </div>
                <Button className={'mr-2'} type={'button'} onClick={this.save}>Save</Button>
                <Button type={'button'} onClick={this.cancel}>Cancel</Button>
            </div>
        );
    }
}

export default Add;
