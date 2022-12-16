import { todoAction } from "../types/Types"

export interface todos {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}

export interface todoReducerInter {
    state: todos[],
    action: todoAction
}

export interface todoProps {
    data: todos[]
}