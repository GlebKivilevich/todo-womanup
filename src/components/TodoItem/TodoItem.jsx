import React, {useContext} from 'react';
import axios from 'axios';
import "./TodoItem.scss"
import AppContext from '../../context';

 function TodoItem() {
  const {itemTodo, setItemTodo, todoFetch} = useContext(AppContext);
  const nowDate = new Date();
  const redClazz = "distance"; 

  /** 
   * @param {string} id принимает в виде строки выбранную задачу, которую надо поменять на сервере, 
   * после чего проверяет все задачи и удаляет выбранную
   */
  const removeItem = async (id) => {
    await axios.delete(`https://637651ccb5f0e1eb8508cb48.mockapi.io/todoItem/${id}`);
    setItemTodo((prev) => prev.filter(items => items.id !== id))
  }
  /** 
   * @param {string} id принимает в виде строки выбранную задачу, которую надо поменять на сервере
   * @param {number} index принимает в виде числа индекс выбранной задачи, после чего обновлеят данные на сервере 
   * 
   * todoFetch - перерисовывает компонент
   */
  const completedTodo = async (id, index) => {
    await axios.put(`https://637651ccb5f0e1eb8508cb48.mockapi.io/todoItem/${id}`, {completed: !itemTodo[index].completed});
    todoFetch();
  }

  /**
   * Переменная distance сравнивает дату указанную в input, с настоящим временем
   */
  let distance;
  return (
    <div className='container-item'>
      {
        itemTodo.map((item) => {         
          return (            
            <div className='todo-item' key={item.id}>
              {distance = new Date(item.date).getTime() <  nowDate.getTime()}
              <div className="desc-item">
                <h2><span>Задача:</span> <span className={item.completed ? "active" : null}>{item.titel}</span> </h2>
                <p><span>Описание:</span> <span className={item.completed ? "active" : null}>{item.description}</span></p>
                <p className={distance ? redClazz : null}><span>{distance ? "Время вышло:" : "Выполнить до:"}</span>
                  <span className={item.completed ? "active" : null}>{item.date}</span> 
                </p>
               
                  {
                    item.file !== "undefined" ?  
                    <div className='todo-file'>
                      <img src={item.file} alt="your photo" width={180}/>                    
                     </div>
                    : null
                  }                 
               
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
