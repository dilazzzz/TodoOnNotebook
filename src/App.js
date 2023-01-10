import './App.css';
import {useState, useEffect, useMemo} from "react";
import TodoList from "./Components/TodoList/TodoList";
import Counter from "./Components/Counter/Counter";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import AddBoxIcon from '@mui/icons-material/AddBox';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {AddBox} from "@mui/icons-material";

function App() {

    const [title, setTitle] = useState('')
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
    const [searchTodo, setSearchTodo] = useState('')

     const addNewTodo = (e) => {
         e.preventDefault()

         const newTodo = {
             id: Date.now(),
             title,
             complete: false
         }
         setTodos([newTodo, ...todos])
         setTitle('')
     }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])



    return (
        <div className="App">
            <h1 style={{color: 'white'}}>Список делишек</h1>
            <div className='addGroup'>
                <TextField
                    style={{background: 'white', borderRadius: '10px 0 0 10px '}}
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder={'Введите название дела'}
                />
                <Button
                    className={'btn'}
                    onClick={addNewTodo}
                    variant="contained"
                    color="secondary"
                    aria-label="add"
                    startIcon={<AddBox style={{fontSize: 'xxx-large'}}/>}
                    // disabled={!title}
                ></Button>
            </div>
            {/*<TextField*/}
            {/*    fullWidth*/}
            {/*    style={{background: 'white'}}*/}
            {/*    id="outlined-basic"*/}
            {/*    variant="outlined"*/}
            {/*    type="text"*/}
            {/*    value={searchTodo}*/}
            {/*    onChange={e => setSearchTodo(e.target.value)}*/}
            {/*    placeholder={'Поиск дела'}*/}
            {/*/>*/}
            <TodoList todos={todos}  setTodos={setTodos}/>
            <Counter />
        </div>
    );
}

export default App;
