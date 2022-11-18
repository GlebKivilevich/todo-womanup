import React, {useState} from 'react';
import "./header.scss";

 function Header() {
  const [todoText, setTodoText] = useState("");

  const inputAdd = (e) => {
    setTodoText(e.target.value);
  }

  const onAddTask = () => {
    console.log(todoText);    
    if(todoText.length >= 2) {
      console.log("Add");
    } else {
      console.log("Меньше 2 символов");
    }
  } 

  return (
    <div className="header">
        <h1>Todo WomanUP</h1>
        <div className="todo-add">
          <div className='form'>
            <input 
              className='input' 
              type="text" 
              placeholder='Введите задачу' 
              value={todoText} 
              onChange={inputAdd}
            />
            <button 
              onClick={() => onAddTask()}
              className='btn'
            >Добавить</button>
          </div>          
        </div>
        {/* <img src="../image/trash.svg" alt="delet"/> */}
    </div>
  )
}
export default Header;