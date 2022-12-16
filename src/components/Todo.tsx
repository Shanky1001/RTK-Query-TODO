import React, { FC, useState } from 'react'
import { useAddTodosMutation, useGetTodosQuery } from '../services/JsonPlaceholder';
import { Complete } from './Complete';
import Incomplete from './Incomplete';


const Todo: FC = () => {

    const [title, setTitle] = useState('');
    const [addTodo] = useAddTodosMutation();
    const { data } = useGetTodosQuery(null);

    const addTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const task = {
            "userId": 2,
            "title": title,
            "completed": Boolean(Math.floor(Math.random() * 1))
        }
        setTitle('');
        addTodo(task);
    }

    return (
        <div className='container'>
            <h2 className='text-center'>TODO LIST</h2>
            <form onSubmit={(e) => addTask(e)} className='row g-3'>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button className='btn btn-primary col-3' type='submit'>Add Task</button>
            </form>
            <Incomplete data={data} />
            <hr />
            <Complete data={data} />
        </div>
    )
}

export default Todo