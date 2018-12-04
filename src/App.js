import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todo.json';
import TodoForm from './components/TodoForm'
console.log(TodoForm);

console.log(todos);

class App extends Component {

  constructor(){
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this); 
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index){
    this.setState({
      todos: this.state.todos.filter((element,i) => {
        return i !== index
      })
    })
  }

  render() {

    const _todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4 mb-4">
          <div className="card-title text-center">
              <div className="card-header">
                <h3>{todo.title}</h3>
                <span className="badge badge-pill badge-danger ml-2">
                    {todo.priority}
                </span>
              </div>
              <div className="card-body">
                <p>{todo.description}</p>
                <p><mark>{todo.responsible}</mark></p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={this.removeTodo.bind(this,i)}>
                    Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">              
          <nav className="navbar navbar-dark bg-dark">
            <a className="text-white" href="/">
              Tasks
              <span className="badge badge-pill badge-light ml-2">
                {this.state.todos.length}
              </span>
            </a>
          </nav>

          

          <div className="container">
            <div className="row mt-4">

              <div className="col-md-4 text-center">
                  <img src={logo} className="App-logo" alt="logo" />
                <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
              </div>
             
              <div className="col-md-8">
                <div className="row">
                  {_todos}
                </div>
              </div>
            </div>
          </div>
          
               
      </div>
    );
  }
}

export default App;
