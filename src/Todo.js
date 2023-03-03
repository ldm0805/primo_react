import React from 'react';
//Stampo i valori della lista
export default function Todo({ todo }) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} />
                {todo.name}
            </label>
        </div>
    );
}
