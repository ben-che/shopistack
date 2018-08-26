import * as React from 'react';

import IToDoModel from '../models/ToDoModel';
import Item from "./Item";

// Using an interface to type props
interface IProps {
    id:number
    itemList : IToDoModel[]
    name: string
}


class List extends React.Component<IProps, {}> {

    public render() {
        return (
        <div>
            <p>{this.props.name}</p>

            <Item />
        </div>
        );
    }
}

export default List;
