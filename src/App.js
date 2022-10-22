import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'buy mario kart'}
    ]
  }
  deleteTodo = (id) => {
    console.log(id)
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo />
      </div>
    )
  }
}

export default App;
