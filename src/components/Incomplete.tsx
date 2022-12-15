import React, { FC } from 'react'
import { useAddTodosMutation, useChangeTodosMutation, useDeleteTodosMutation, useGetTodosQuery } from '../services/JsonPlaceholder'
import { todos } from '../typescript/interfaces/Interfaces';

const Incomplete: FC = () => {

  const { data } = useGetTodosQuery(null);
  const [changeTodos] = useChangeTodosMutation();
  const [deleteTodos] = useDeleteTodosMutation();

  return (
    <div className='mt-3'>
      <h3>Incomplete Task</h3>
      <ul>
        {data && data.map((val: todos) => {
          if (!val.completed)
            return (<li key={val.id} className="d-flex justify-content-between">
              <form className='form-check' onChange={() => changeTodos({ ...val, completed: true })}>
                <input className="form-check-input" type="checkbox" value="" id="flexCheck" /><label className="form-check-label" htmlFor="flexCheck">{val.title}</label>
              </form>
              <span><i className="fa-solid fa-trash" onClick={() => deleteTodos(val.id)}></i></span>
            </li>)
        }
        )}
      </ul>
    </div >
  )
}

export default Incomplete