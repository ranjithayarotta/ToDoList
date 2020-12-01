import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ToDolistItem } from './TolistIem';
import { Todo } from './Type';

const  todos : Array<Todo> =[
{text:"Eat lunch", complete:false},
{text:"Finish course", complete:false}
];
function App() {
  return (
    <div className="App">
      Todos     &nbsp; 
      <input type="text"></input>
  <React.Fragment>
  <ToDolistItem todo={todos[0]}/>
  <ToDolistItem todo={todos[1]}/>
</React.Fragment>

    </div>
  );
}

export default App;
