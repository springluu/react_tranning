import React, {Component} from 'react';
import Header from './components/Header';
import reducer from "./reducers";
import { createStore } from "redux";

const initialState = { tech: "React " };
const store = createStore(reducer, initialState);

class App extends Component {
    //state = store.getState();
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            id: 1
        }
    }

    add =()=> {
        // this.setState( {
        //     list : [...this.state.list, {id: this.state.id, name: 'name1'}],
        //     id: this.state.id + 1
        // });

        // this.setState(prevState => ({
        //     list: [...prevState.list, {id: this.state.id, name: 'name1'}],
        //     id: prevState.id + 1
        // }))

        // this.setState({
        //     list: this.state.list.concat({id: this.state.id, name: 'name1'}),
        //     id: this.state.id + 1
        // })

        this.setState(prevState => ({
            list: prevState.list.concat({id: this.state.id, name: 'name1'}),
            id: prevState.id + 1
        }))

        console.log()
    };

    delete(id) {
        let xxx = this.state.list;

        xxx = xxx.filter((item, key)=>{
            return item.id !== id;
        });

        this.setState( {
            list : xxx
        });
    }

    inputChange =(e)=> {
        let name = e.target.name;
        let value = e.target.value;
        this.setState( {
            [name] : value
        });

        console.log(this.state)
    }

    search() {}

    componentWillMount(){}

    render() {
        return (
            <div>
                <Header tech={store.getState().tech}/>
                <hr/>
                <div className={'form-search'}>
                    <input type={'text'} name={'name-search'} onChange={this.inputChange}/>
                    <button onClick={this.search}>Search</button>
                </div>
                <button onClick={this.add}>Them moi cong viec</button>
                {this.state.list.map((item, key) => {
                    return (
                        <div key={key}>
                            <span>{item.id}</span>
                            <span>{item.name}</span>
                            <button onClick={()=>{this.delete(item.id)}}>delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default App
