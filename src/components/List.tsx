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
    
    // Rendering multiple items
    public renderItems = () => {
        const itemListJSX = []
        for (const x of this.props.itemList) {
            itemListJSX.push(<Item details={x} />)
        }
        return itemListJSX;
    }

    public render() {
        return (
        <div>
            <p>{this.props.name}</p>

            {this.renderItems()}
        </div>
        );
    }
}

export default List;
