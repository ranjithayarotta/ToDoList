import React from 'react';
import { Todo } from './Type';


interface TodoListItemProps{
todo:Todo
};

export const ToDolistItem:React.FC<TodoListItemProps> =({todo})=>{
    return (
        <ul>

        <li>
            <p>{todo.text}</p>
            <button>edit</button>
            <button>Delete</button>
            </li>
            </ul>
    );
};