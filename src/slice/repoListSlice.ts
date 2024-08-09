import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {reposAPI, RequestArg} from "../api";


// Тип репозиторий.

export type Repo = {
    id: string;
    name: string;
    language: string;
    forks: number;
    stargazers_count: number;
    updated_at: string;
    description: string;
    owner: {
        login: string;
    };
    license: {
        name: string;
    };
}
// Тип возможных направлений сортировки.
export type Sort = 'stars' | 'forks' | 'updated' | 'language' | 'name'

// Тип направления сортировки.
export type sortOrder = 'asc' | 'desc'

// Тип состояние slice.
type initialState = {
    items: Repo[]
    selectedRepo: Repo | null
    total_count: number
    currentPage: number
    perPage: number
    sort: Sort
    sortOrder: sortOrder
    query: string
}
// Начальное состояние slice
const initialState: initialState = {
    items: [],
    selectedRepo: null,
    total_count: 0,
    currentPage: 1,
    perPage: 10,
    sort: 'stars',
    sortOrder: 'asc',
    query: ''
}
// Slice для работы с репозиториями.
const slice = createSlice({
    name: "reposList",
    initialState,
    reducers: {
        /**
         * Устанавливает выбранный репозиторий.
         * @param state - Текущее состояние.
         * @param action - Действие с переданным репозиторием.
         */
        selectRepos: (state, action: PayloadAction<Repo>) => {
            state.selectedRepo = action.payload;
        },

        /**
         * Устанавливает количество элементов на странице.
         * @param state - Текущее состояние.
         * @param action - Действие с переданным значением количества элементов.
         */
        setPerPage: (state, action: PayloadAction<number>) => {
            state.perPage = action.payload;
        },

        /**
         * Устанавливает текущую страницу.
         * @param state - Текущее состояние.
         * @param action - Действие с переданным номером страницы.
         */
        setPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },

        /**
         * Устанавливает поисковый запрос.
         * @param state - Текущее состояние.
         * @param action - Действие с переданной строкой запроса.
         */
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },

        /**
         * Устанавливает поле для сортировки.
         * @param state - Текущее состояние.
         * @param action - Действие с переданным полем для сортировки.
         */
        setSort:(state, action: PayloadAction<Sort>)=>{
            state.sort = action.payload
        },

        /**
         * Устанавливает направление сортировки.
         * @param state - Текущее состояние.
         * @param action - Действие с переданным направлением сортировки.
         */
        setOrder:(state, action: PayloadAction<sortOrder>)=>{
            state.sortOrder = action.payload
        }
    },
    extraReducers: (builder) => {
        /**
         * Обработка успешного выполнения асинхронного действия fetchRepos.
         * @param state - Текущее состояние.
         * @param action - Действие с переданным обновленным состоянием.
         */
        builder.addCase(fetchRepos.fulfilled, (state, action: PayloadAction<initialState>) => {
            state.items = action.payload.items
            state.total_count = action.payload.total_count
        })

    }
})

/**
 * Асинхронное действие для получения списка репозиториев с сервера.
 * @param arg - Параметры запроса.
 * @returns - Ответ от сервера с данными.
 */
export const fetchRepos = createAsyncThunk(`${slice.name}/searchRepos`,
    async (arg: RequestArg) => {
        const res = await reposAPI.fetchRepos({...arg})
        return res.data
    })
// Экспорт действий для изменения состояния.
export const {selectRepos, setPage,setQuery, setPerPage, setSort, setOrder} = slice.actions

//Экспорт действий для изменения состояния.
export default slice.reducer