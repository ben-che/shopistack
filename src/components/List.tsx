import * as React from 'react';

import ToDoModel from '../models/ToDoModel';
import Item from "./Item";

interface IProps {
    id:number
    itemList : ToDoModel[]
}


class List extends React.Component<IProps, {}> {
    

    public render() {
        return (
        <div>
            {this.props.itemList[0].description}

            <Item />
        </div>
        );
    }
}

export default List;
