import React from 'react'

export default function Todos({todos}) {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : 
    (
        <p>You have no todo's left, yay!</p>
    )
  return (
    <div className="todos collection">
        {todoList} 
    </div>
  )
}
