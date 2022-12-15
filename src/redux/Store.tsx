import { configureStore } from "@reduxjs/toolkit";
import { PlaceholderAPI } from "../services/JsonPlaceholder";

export const Store = configureStore({
    reducer: {
        [PlaceholderAPI.reducerPath]: PlaceholderAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(PlaceholderAPI.middleware),
})
