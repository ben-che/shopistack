import * as React from 'react';

import IToDoModel from "./../models/ToDoModel"

interface IProps {
  details : IToDoModel
}

class Item extends React.Component<IProps, {}> {
  public render() {
    return (
      <div> 
        <p>{this.props.details.description}</p> 
      </div>
    );
  }
}

export default Item;
