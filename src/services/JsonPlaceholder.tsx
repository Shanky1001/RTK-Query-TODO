import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const PlaceholderAPI = createApi({
    reducerPath: "APIReducer",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        }),
        addTodos: builder.mutation({
            query: (data) => ({
                url: '/todos',
                method: 'POST',
                body: data
            })
        }),
        changeTodos: builder.mutation({
            query: (data) => ({
                url: `/todos/${data.id}`,
                method: 'PATCH',
                body: data
            })
        }),
        deleteTodos: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
            })
        })
    })
})

export const { useGetTodosQuery, useAddTodosMutation, useChangeTodosMutation, useDeleteTodosMutation } = PlaceholderAPI;