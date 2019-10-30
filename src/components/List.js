import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { orderBy as orderByld } from 'lodash';

class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
            helo: true
        };
    }

    delete =(id)=> {
        let xxx = this.props.list;
        xxx = xxx.filter((item, key)=>{
            return item.id !== id;
        });

        let zzz = this.props.listClone;
        zzz = zzz.filter((item, key)=>{
            return item.id !== id;
        });

        this.props.onDelete(xxx, zzz);
    };

    edit =(id)=> {
        this.props.onEdit(id);
    };

    sort =(param)=> {
        let xxx = this.props.list;
        let order = this.state[param] ? 'asc' : 'desc';
        xxx = orderByld(xxx, [param], order );
        this.props.onSort(xxx);

        this.setState(prev =>({
            [param]: !prev[param]
        }));
    };

    render() {
        let {list} = this.props;
        if (list && list.length > 0) {
            let keys = Object.keys(list[0]);

            return (
                <table className={'table table-border mt-3 mb-3'}>
                    <thead>
                    <tr>
                        {keys.map((i, index) => {
                            return (
                                <td key={index}>
                                    <span>{i}</span>
                                    <button onClick={()=>{this.sort(i)}}>sort</button>
                                </td>
                            )
                        })}
                        <td>Action</td>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((item, key) => {
                        return (
                            <tr key={key}>
                                {keys.map((i, index) => {
                                    return (
                                        <td key={index}>
                                            <span>{item[i]}</span>
                                        </td>
                                    )
                                })}
                                <td>
                                    <Button className={'mr-2'} onClick={() => {
                                        this.delete(item.id)
                                    }}>delete</Button>
                                    <Button onClick={() => {
                                        this.edit(item.id)
                                    }}>edit</Button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            );
        }
        return false;
    }
}

export default List;
