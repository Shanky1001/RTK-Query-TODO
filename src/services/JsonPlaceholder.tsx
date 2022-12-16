import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { todos } from "../typescript/interfaces/Interfaces";

export const PlaceholderAPI = createApi({
    reducerPath: "APIReducer",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['todos'],
    endpoints: (builder) => ({
        getTodos: builder.query<todos[], void>({
            query: () => '/todos',
            providesTags: ['todos']
        }),
        addTodos: builder.mutation<todos, Omit<todos, 'id'>>({
            query: (data: todos) => ({
                url: '/todos',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['todos']
        }),
        changeTodos: builder.mutation<todos, Omit<todos, 'id'>>({
            query: (data: todos) => ({
                url: `/todos/${data.id}`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['todos']
        }),
        deleteTodos: builder.mutation<todos[], Partial<todos> & Pick<todos, 'id'>>({
            query: (data) => ({
                url: `/todos/${data.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['todos']
        })
    })
})

export const { useGetTodosQuery, useAddTodosMutation, useChangeTodosMutation, useDeleteTodosMutation } = PlaceholderAPI;