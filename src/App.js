import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import Header from './components/Header';
import Add from './components/Add';
import Search from './components/Search';
import List from './components/List';
import reducer from "./reducers";
import { createStore } from "redux";

const initialState = { tech: "Luu Nguyen" };
const store = createStore(reducer, initialState);

class App extends Component {
    //state = store.getState();
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id: 1, name: 'Nguyen A', point: '5'},
                {id: 2, name: 'Nguyen H', point: '9'},
                {id: 3, name: 'Nguyen C', point: '6'},
                {id: 4, name: 'Nguyen Z', point: '3'},
                {id: 5, name: 'Nguyen E', point: '8'},
            ],
            listClone: [],
            searchActive: false,
            id: 6,
            show: false
        }
    }

    adddd =()=> {
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
    };

    edit(id) {}

    delete =(res1, res2) =>{
        this.setState( {
            list : res1,
            listClone : res2,
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

    search = (res) =>{
        console.log(this.state.listClone);
        this.setState({
            list: res,
            searchActive: true
        })
    };

    sort = (res) =>{
        console.log(res)
        this.setState({
            list: res,
        })
    };

    save = (params) =>{
        this.setState(prevState => ({
            list: [...prevState.list, {id: this.state.id, name: params.name, point: params.point}],
            listClone: [...prevState.listClone, {id: this.state.id, name: params.name, point: params.point}],
            id: prevState.id + 1,
        }))
    };

    showAdd =()=> {
        this.setState(prevState => ({
            show: !prevState.show,
        }))
    };

    componentDidMount(){
        this.setState({
            listClone: [...this.state.list]
        })
    }

    render() {
        let {show, list, listClone} = this.state;

        return (
            <div className={'container p-3 border mt-3'}>
                <Button onClick={this.showAdd}>{show ? 'Hidden' : 'Add'}</Button>
                {show &&
                    <Add onSave={this.save}/>
                }
                <div>
                    <Search onSearch={this.search} list={listClone}/>
                    <List list={list} listClone={listClone} onDelete={this.delete} onEdit={this.edit} onSort={this.sort}/>
                </div>
            </div>
        )
    }
}

export default App
