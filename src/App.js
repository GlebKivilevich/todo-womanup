import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import "./App.scss"
function App() {
  return (
    <div className="wrapper">
       <Header/>
       <TodoList/>
    </div>
   
  );
}

export default App;
