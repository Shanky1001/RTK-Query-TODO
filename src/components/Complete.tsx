import React, { FC } from 'react'
import { useChangeTodosMutation, useDeleteTodosMutation, useGetTodosQuery } from '../services/JsonPlaceholder'
import { todoProps, todos } from '../typescript/interfaces/Interfaces'

export const Complete: FC<todoProps> = ({ data }) => {

  const [changeTodos] = useChangeTodosMutation();
  const [deleteToDos] = useDeleteTodosMutation();
  
  return (
    <div>
      <h3>Completed Task</h3>
      <ul>
        {data && data.map((val: todos) => {
          if (val.completed)
            return (
              <li key={val.id} className="d-flex justify-content-between">
                <form className='form-check' onClick={() => changeTodos({ ...val, completed: false })}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheck" checked /><label className="form-check-label text-decoration-line-through" htmlFor="flexCheck">{val.title}</label></form>
                <span><i className="fa-solid fa-trash" onClick={() => deleteToDos(val.id)} ></i></span>
              </li>
            )
        }
        )}
      </ul>
    </div>
  )
}
