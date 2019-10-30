import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class Search extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            point: '',
        };
    }

    search =()=> {
        let xxx = this.props.list;
        xxx = xxx.filter((item, index) =>{
            let check1 = true, check2 = true;
            if (this.name.value) check1 = item.name === this.name.value;
            if (this.point.value) check2 = item.point === this.point.value;

            return check1 && check2;
        });

        this.props.onSearch(xxx);
    };

    render() {
        return (
            <div className={'form-group mb-3 mt-3'}>
                <div>
                    <label>Name:</label>
                    <input className={'form-control'} type={'text'} ref={element => this.name = element}/>
                    <label>Point:</label>
                    <input className={'form-control'} type={'text'} ref={element => this.point = element}/>
                </div>
                <Button className={'mt-3'} type={'button'} onClick={this.search}>Search</Button>
            </div>
        );
    }
}

export default Search;
