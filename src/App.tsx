import * as React from 'react';
import './App.css';
import List from "./components/List";
import IListModel from './models/ListModel';

// Data structures of To Do items will go as following:
// list : an Array of To Do Lists
  // a single To Do list will hold an ID (number) and an array of To Do items
    // a single To Do Item will have an id(number), a description (string) and a done (boolean) to indicate completeness

// Interface names have to start with capital I
// App will not receive props - Typescript will not run if an empty interface is declared
// interface IProps { }

// Defining state as an Array of ListModels, which then contain To Do
interface IState {
  list: [IListModel]
}

class App extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props)
    this.state = {
      list: [
        {
          id: 1,
          items:[{
            description:"Test the to do list",
            done:false,
            id:0,
          }]
        }
      ]
    }
  }

  public render() {
    return (
      <div className="App">
        <List id={this.state.list[0].id}
              itemList = {this.state.list[0].items}
            />
      </div>
    );
  }
}

export default App;
