import React, {useContext} from 'react';
import TodoItem from '../TodoItem/TodoItem';
import "./todoList.scss";
import AppContext from '../../context';

function TodoList() {
  const {itemTodo} = useContext(AppContext);
  return (
    <div className="todo-list">
        <div className="item">
          {itemTodo.length === 0 ? 
            <h2 style={{textAlign: "center", fontSize: 32}}>У вас нет заметок</h2> 
            : <TodoItem/>}
            
        </div>
    </div>
  )
}
export default TodoList;
