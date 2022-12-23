import { Store } from "../../redux/Store";
import { todos } from "../interfaces/Interfaces";


export type todoAction = { type: "addToDo", payload: todos } | { type: "deleteToDo", payload: { id: number } } | { type: 'completed', payload: { id: number } } | { type: 'incomplete', payload: { id: number } };
export type StoreType = ReturnType<typeof Store.getState>
