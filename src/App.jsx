import './App.css'
import AppName from "./AppName"
import AddTodo from "./Components/AddTodo"
import TodoItem1 from "./Components/TodoItem1"
import TodoItem2 from "./Components/TodoItem2"
// import "./App.css"

function App() {
    return (
    <>
    <div className="Outer-Container">
    <div className="TodoContainer">
        <AppName/>
        <div className='ItemContainer'>
        <AddTodo/>
        <div className="Todo-Item">
            <TodoItem1/>
            <TodoItem2/>
        </div>
        </div>
    </div>
    </div>
    </>
    )
}

export default App
