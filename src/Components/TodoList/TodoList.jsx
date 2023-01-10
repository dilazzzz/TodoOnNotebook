import React, {useState} from 'react';
import todoList from './todoList.module.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { ReactSortable } from "react-sortablejs";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const TodoList = ({todos,setTodos}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [selectedId, setSelectedId] = useState(null);

    const deleteTodo = () => {
        setTodos(todos.filter( todo => todo.id !== selectedId))
        setSelectedId(null)
    }

    const completeTodo = (id) => {
        setTodos(todos.map(todo => {
            return todo.id === id ? {...todo, complete: !todo.complete } : todo
        }))
    }

    const deleteAllTodo = () => {
        setTodos(todos = [])
    }

    let todoNum = 0
    return (
        <>
            <ReactSortable list={todos} setList={setTodos}>
                    {todos.map(todo => {
                        return (
                           <div key={todo.id} variant='outlined' className={todoList.wrapper} style={{background: todo.complete ? 'lightgreen' : ''}}>
                               <h3>{todoNum += 1}.{todo.title}</h3>
                               <div className={todoList.buttons}>
                                   <Button className={'btn'} variant="contained" color="success" startIcon={<CheckIcon />} onClick={() => completeTodo(todo.id)}></Button>
                                   <Button className={'btn'} variant="outlined" color="error" startIcon={<DeleteIcon  />}  onClick={() => setSelectedId(todo.id)}></Button>
                               </div>
                           </div>
                        )
                    })}
            </ReactSortable>
            <Modal
                open={!!selectedId}
                onClose={() => setSelectedId(null)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Вы уверены, что хотите удалить дело?
                    </Typography>
                    <Button variant="outlined" color="error" onClick={deleteTodo}>Да</Button>
                    <Button variant="outlined" onClick={() => setSelectedId(null)}>Нет</Button>
                </Box>
            </Modal>
            <Button
                style={{background: 'white', marginTop: 20}}
                variant="outlined"
                color="error"
                onClick={deleteAllTodo}
                disabled={!todos.length}
            >Удалить все дела</Button>
        </>
    );
};

export default TodoList;