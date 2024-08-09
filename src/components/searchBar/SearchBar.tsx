import React, {ChangeEvent, useState} from 'react';
import {Button, TextField} from '@mui/material';
import s from './styles.module.sass'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {fetchRepos, setQuery} from "../../slice/repoListSlice";
import {useSelector} from "react-redux";
import {selectOrder, selectPage, selectPerPage, selectQuery, selectSort} from "../../selectors/selectors";


export const SearchBar = () => {

    const query = useSelector(selectQuery)
    const per_page = useSelector(selectPerPage)
    const page = useSelector(selectPage)
    const sort = useSelector(selectSort)
    const order = useSelector(selectOrder)

    const dispatch = useAppDispatch();

    const onSearch = () => {
        dispatch(fetchRepos({q: query, page, per_page, sort, order}))
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setQuery(e.currentTarget.value))
    }

    return (
        <div className={s.searchBar}>
            <TextField
                value={query}
                onChange={onChange}
                className={s.textField}
                variant="outlined"
                placeholder={'Введите поисковый запрос'}

            />
            <Button variant={"contained"} disabled={!query} onClick={onSearch}>Искать</Button>
        </div>
    );
};

