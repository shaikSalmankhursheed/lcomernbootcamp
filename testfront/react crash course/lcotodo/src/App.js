import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
      showInput: ""
    };
  }
  addItem(todovalue) {
    if (todovalue !== "") {
      const newItem = {
        id: Date.now(),
        value: todovalue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list: list,
        newItem: ""
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({
      list: updatedlist
    });
  }

  showInput(value) {
    this.setState({
      showInput: value
    });
  }
  updateInput(input) {
    this.setState({ newItem: input });
  }

  render() {
    return (
      <div className="container">
        <img src={logo} width="100" height="100" className="logo" alt="logo" />
        <h1 className="app-title">LCO ToDo App</h1>
        <div>Add an Item....</div>
        <br></br>
        <input
          type="text"
          required
          value={this.state.newItem}
          onChange={e => this.updateInput(e.target.value)}
          className="input-text"
          placeholder="write a ToDo"
        ></input>
        <button
          className="add-btn"
          onClick={() => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
        >
          Add Todo
        </button>
        <div className="list">
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    name="isDone"
                    checked={item.isDone}
                    onChange={() => {}}
                  />
                  {item.value}
                  <button
                    className="btn"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
            <li>
              <input type="checkbox" />
              Record Youtube videos
              <button className="btn">Delete</button>
            </li>
          </ul>
        </div>
        <input type="text" onChange={e => this.showInput(e.target.value)} />
        <p>{this.state.showInput}</p>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" />
//         <p>Learn React with Hitesh Crash course</p>
//       </header>
//     </div>
//   );
// }

export default App;
