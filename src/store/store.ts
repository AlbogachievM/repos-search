import {configureStore} from "@reduxjs/toolkit";
import repoListSlice from "../slice/repoListSlice";

// Создание основного Redux-хранилища (store)
export const store = configureStore({
    reducer: {
        repos: repoListSlice
    }
})


export type AppRootState = ReturnType<typeof store.getState> // Тип состояния всего хранилища Redux
export type AppDispatch = typeof store.dispatch // Типизация функции dispatch для всего приложения
