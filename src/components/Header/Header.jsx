import React, {useState, useContext} from 'react';
import axios from "axios";
import "./header.scss";

import AppContext from '../../context';

 function Header() {  

  const obj = {
    titel: "",
    description: "",
    date: null,
    completed: false
  }
  const {todoFetch} = useContext(AppContext);

  const [todoText, setTodoText] = useState("");
  const [description, setDescription] = useState("");
  const [dateDay, setDateDay] = useState("");
  const [dateTime, setDateTime] = useState("");

  const inputAdd = (e) => {
    setTodoText(e.target.value);
  }
  const descriptionAdd = (e) => {    
    setDescription(e.target.value);
  }

  const dateDayAdd = (e) => {
    setDateDay(e.target.value);
  }

  const dateTimeAdd = (e) => {
    setDateTime(e.target.value)
  }
  const onAddTask = async () => {   
    if(todoText.length >= 2 && description.length > 2 && dateDay && dateTime) {      
      obj.titel = todoText;
      obj.description = description;
      obj.date = `${dateDay} ${dateTime}`;
      await axios.post("https://637651ccb5f0e1eb8508cb48.mockapi.io/todoItem/", obj);
      todoFetch();
      setTodoText("");
      setDescription("");
      setDateDay("");
      setDateTime("");
    } else {
      alert("Заполните все поля");
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
            <input 
              className='input' 
              type="text" 
              placeholder='Введите описание' 
              value={description} 
              onChange={descriptionAdd}
            />
             <input 
              className='input' 
              type="date" 
              value={dateDay} 
              onChange={dateDayAdd}
            />
            <input 
              className='input' 
              type="time" 
              value={dateTime}
              onChange={dateTimeAdd}
            />
            <button 
              onClick={() => onAddTask()}
              className='btn'
            >Добавить</button>
          </div>          
        </div>
    </div>
  )
}
export default Header;