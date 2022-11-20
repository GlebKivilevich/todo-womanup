import React, {useContext} from 'react';
import "./TodoItem.scss"
import AppContext from '../../context';

 function TodoItem() {
  const {itemTodo, removeItem, completedTodo} = useContext(AppContext);
  const clazz = "desc-item"
  return (
    <div className='container-item'>
      {
        itemTodo.map((item) => {
          return (
            <div className='todo-item' key={item.id}>
              <div className={item.completed ? `${clazz} active` : `${clazz}`}>
                <h2><span>Задача:</span> {item.titel}</h2>
                <p><span>Описание:</span> {item.description}</p>
                <p><span>Выполнить до:</span> {item.data}</p>
              </div>
              <div className="control-block">
                <button className='btn-del' onClick={() => completedTodo(item.id, itemTodo.indexOf(item))}>
                  {!item.completed
                    ?  
                      <img src="../image/btn-unperformed.svg" alt="" />
                    :
                      <img src="../image/performed.svg" alt="" />
                  }
                 
                </button>
                <button onClick={() => removeItem(item.id)} className='btn-del'><img src="../image/trash.svg" alt="delet"/></button>
              </div>               
            </div>
              
          );
        })
      }
        
    </div>
  )
}
export default TodoItem;