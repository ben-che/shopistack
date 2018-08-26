import * as React from 'react';
import './App.css';
import List from "./components/List";
import ListModel from './models/ListModel';

// Data structures of To Do items will go as following:
// list : an Array of To Do Lists
  // a single To Do list will hold an ID (number) and an array of To Do items
    // a single To Do Item will have an id(number), a description (string) and a done (boolean) to indicate completeness

// App will not receive props
interface Props { }
// Defining state as an Array of ListModels, which then contain To Do
interface State {
  list: Array<ListModel>
}

class App extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props)
    this.state = {
      list: [
        {
          id: 1,
          items:[{
            id:0,
            description:"Test the to do list",
            done:false
          }]
        }
      ]
    }
  }
  
  

  public render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}

export default App;
