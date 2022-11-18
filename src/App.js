import React, { useEffect, useState } from 'react';
import "./App.scss"
import axios from 'axios';
import AppContext from './context';

import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [itemTodo, setItemTodo] = useState([]);
  const obj = {
    titel: "",
    description: "",
    data: null,
  }
  
  const todoFetch = async () => {
    try {
      await axios.get("https://637651ccb5f0e1eb8508cb48.mockapi.io/todoItem/")
        .then(res => setItemTodo(res.data))
    } catch(error) {
      console.log("Ошибка при получении данных");
      console.error(error);
    }    
  }

  const removeItem = async (id) => {
    await axios.delete(`https://637651ccb5f0e1eb8508cb48.mockapi.io/todoItem/${id}`);
    setItemTodo((prev) => prev.filter(items => items.id !== id))
  }
  
  useEffect(() => {
    todoFetch();
  }, []);

  
  return (
    <div className="wrapper">
      <AppContext.Provider value={{ 
        obj,
        itemTodo,
        removeItem
      }}>
        <Header/>
        <TodoList/>
      </AppContext.Provider>
       
    </div>
   
  );
}

export default App;
