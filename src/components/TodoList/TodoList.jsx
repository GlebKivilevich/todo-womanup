import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import "./todoList.scss"

function TodoList() {
  return (
    <div className="todo-list">
        {/* TODO: если нет item, добавить текст: "У вас нет заметок!" */}
        <div className="item">
            <TodoItem/>
        </div>
    </div>
  )
}
export default TodoList;
