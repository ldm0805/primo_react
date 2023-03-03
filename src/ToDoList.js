import React from 'react';
import Todo from './Todo';
//Funzione per stampare i valori della lista
export default function ToDoList({ todosList }) {
    return (
        todosList.map(todo => {
            return <Todo key={todo.id} todo={todo} />
        })
    );
}