import React, {useContext} from 'react';
import "./TodoItem.scss"
import AppContext from '../../context';

 function TodoItem() {
  const {itemTodo, removeItem} = useContext(AppContext);

  console.log(itemTodo);
  return (
    <div className='container-item'>
      {
        itemTodo.map((item) => {
          return (
            <div className='todo-item' key={item.id}>
              <div className="desc-item">
                <h2><span>Задача:</span> {item.titel}</h2>
                <p><span>Описание:</span> {item.description}</p>
                <p><span>Выполнить до:</span> {item.data}</p>
              </div>
              <div className="control-block">
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
