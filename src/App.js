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
    await axios.get("https://637651ccb5f0e1eb8508cb48.mockapi.io/todoItem/")
      .then(res => setItemTodo(res.data))
  }
  

  useEffect(() => {
    todoFetch();
    console.log(obj);
  }, []);

  
  return (
    <div className="wrapper">
      <AppContext.Provider value={{ 
        obj,
        itemTodo
      }}>
        <Header/>
        <TodoList/>
      </AppContext.Provider>
       
    </div>
   
  );
}

export default App;
