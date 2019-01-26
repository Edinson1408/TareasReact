import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//importando el navegacion js
import Navegacion from './Component/Navegacion.js';
import Formulario from './Component/Formulario.js';


import { todos } from './todos.json';

class App extends Component {
    constructor(){
      super();
      this.state={
        todos
      };
    };
  render() {
    //console.log(this.state.todos);
    //recorer el  com map 
    const todosxd=this.state.todos.map((todo, i)=>{
        return (
          <div className='col-md-4'>
            <div className='card mt-4'>
              <div className='card-header'>
              <h3>{todo.title}</h3>
                <span className='badge badge-pill badge-danger ml-2'>
                  {todo.priority}
                </span>
              </div>
              <div className='card-body'>
                  {todo.description}
              </div>
          </div>
          </div>
        )
      });
    return (
      <div className="App">
        <Navegacion title='Mi Primera Navegacion' numero={this.state.todos.length} />
        <div className='container'>
        <div className="row mt-4">
            <div className="col-md-4 text-center">
                  <Formulario ></Formulario>
            </div>
              
              <div className="col-md-8">
                  <div className="row">
                    {todosxd}
                  </div>
              </div>
        </div>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
