import * as React from 'react';
import './App.css';
import List from "./components/List";
import IListModel from './models/ListModel';
// import IToDoModel from './models/ToDoModel';

// HELPFUL LINTING DISABLER:
    // tslint:disable-next-line

// Data structures of To Do items will go as following:
// list : an Array of To Do Lists
  // a single To Do list will hold an ID (number) and an array of To Do items
    // a single To Do Item will have an id(number), a description (string) and a done (boolean) to indicate completeness

// Interface names have to start with capital I
// App will not receive props - Typescript will not run if an empty interface is declared
// interface IProps { }

// Defining state as an Array of ListModels, which then contain To Do
interface IState {
  activeListId : number,
  activeList: IListModel|any,
  list: IListModel[]
}

// Defining methods for interface
// interface ChooseListEventTarget extends EventTarget {
//   id: number
// }

// interface ChooseListEvent extends React.MouseEvent<HTMLElement> {
//   target: ChooseListEventTarget
// }

class App extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props)
    this.state = {
      activeList:{
        id: 1,
        items:[{
          description:"Test the to do list",
          done:false,
          id:0,
        },
        {
          description:"Add successful modifications list",
          done:false,
          id:1,
        }],
        name: "Test list",
      },
      activeListId : 1,
      list: [
        {
          id: 1,
          items:[{
            description:"Test the to do list",
            done:false,
            id:0,
          },
          {
            description:"Add successful modifications list",
            done:false,
            id:1,
          }],
          name: "Test list",
        },
        {
          id: 2,
          items:[{
            description:"Wash dishes",
            done:false,
            id:0,
          },{
            description:"Fold clothes",
            done:false,
            id:1,
          },{
            description:"Eat dinner",
            done:false,
            id:2,
          }],
          name: "Chores"
        },
      ]
    }
  }

  // Life cycle methods
  public componentDidMount() {
    this.findActiveList()
  }

  public componentDidUpdate(prevProps:any,prevState:any) {
    // Updating the active list - ensuring the new active list ID is not the same as the old one
    if (prevState.activeListId !== this.state.activeListId) {
      this.findActiveList()
    }
  }

  // Defining methods

  // Checks state to see which list is active and updates state accordingly
  public findActiveList = () => {
    let currentList;
    for (const i of this.state.list) {
      if (i.id === this.state.activeListId) {
        currentList = i;
        break;
      }
    }
    this.setState({
      activeList: currentList
    })
  }

  // updates the active list to the list that was just clicked
    // when the function is called, takes in an argument of what the new ID is
  public updateActiveList = (id:number) => {
    this.setState({ activeListId : id})
  }

  // render methods
  // this renders all list names and allows users to click on a list to change active list
  public renderListNames = () => {
    const listJSX = [];
    for (const x of this.state.list) {
      // disabling linting for the onClick handler - lambdas only affect performance in React
      //  when it comes to a ShouldComponentUpdate method
      // src: https://stackoverflow.com/questions/43968779/are-lambda-in-jsx-attributes-an-anti-pattern/43968902
      // tslint:disable-next-line
      listJSX.push(<p onClick={() => this.updateActiveList(x.id)}>{x.name}</p>)
    }
    return listJSX;
  }

  // this method 

  public render() {
    return (
      <div className="App">
      <h2>Current Lists</h2>
      {this.renderListNames()}

      <h2>Active list's to do items</h2>
        <List id={this.state.activeListId}
              itemList = {this.state.activeList.items}
              name = {this.state.activeList.name}
            />
      </div>
    );
  }
}

export default App;
