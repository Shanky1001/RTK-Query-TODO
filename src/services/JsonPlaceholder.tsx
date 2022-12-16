import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const PlaceholderAPI = createApi({
    reducerPath: "APIReducer",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['todos'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos',
            providesTags: ['todos']
        }),
        addTodos: builder.mutation({
            query: (data) => ({
                url: '/todos',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['todos']
        }),
        changeTodos: builder.mutation({
            query: (data) => ({
                url: `/todos/${data.id}`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['todos']
        }),
        deleteTodos: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['todos']
        })
    })
})

export const { useGetTodosQuery, useAddTodosMutation, useChangeTodosMutation, useDeleteTodosMutation } = PlaceholderAPI;