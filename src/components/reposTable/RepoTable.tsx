import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel} from "@mui/material";
import {useSelector} from "react-redux";
import {
    selectOrder,
    selectPage,
    selectPerPage,
    selectQuery,
    selectReposItems,
    selectSort
} from "../../selectors/selectors";
import {fetchRepos, Repo, selectRepos, setOrder, setSort, Sort, sortOrder} from "../../slice/repoListSlice";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {Pagination} from "../pagination";
import s from './styles.module.sass'
import {formatDate} from "../../utils/formatDate";

export const RepoTable = () => {

    const dispatch = useAppDispatch();
    const query = useSelector(selectQuery)
    const per_page = useSelector(selectPerPage)
    const page = useSelector(selectPage)
    const sort = useSelector(selectSort)
    const sortOrder = useSelector(selectOrder)
    const repoItems = useSelector(selectReposItems)

    const onSelectRepo = (repo: Repo) => {
        dispatch(selectRepos(repo));
    }

    const onSort = (selectSort: Sort) => {
        let order: sortOrder = sortOrder === 'asc' ? 'desc' : 'asc'
        dispatch(setSort(selectSort))
        dispatch(setOrder(order))
        dispatch(fetchRepos({q: query, page, per_page, sort, order}))

    }
    const items = repoItems.map((item) => {
        return (
            {...item, updated_at: formatDate(item.updated_at)}
        )
    })
    return (
        <section className={s.section}>
            <div>
                <h2>Результаты поиска</h2>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 912}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    onClick={() => onSort('name')}>
                                    <TableSortLabel direction={sortOrder}>Название</TableSortLabel>
                                </TableCell>

                                <TableCell
                                    onClick={() => onSort('language')}
                                    align="right">
                                    <TableSortLabel direction={sortOrder}>Язык </TableSortLabel>
                                </TableCell>

                                <TableCell
                                    onClick={() => onSort('forks')}
                                    align="right">
                                    <TableSortLabel direction={sortOrder}>Число форков </TableSortLabel></TableCell>

                                <TableCell
                                    onClick={() => onSort('stars')}
                                    align="right"> <TableSortLabel direction={sortOrder}>Число
                                    звезд </TableSortLabel></TableCell>

                                <TableCell
                                    onClick={() => onSort('updated')}
                                    align="right"> <TableSortLabel direction={sortOrder}>Дата
                                    обновления </TableSortLabel></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((item) => (
                                <TableRow
                                    style={{cursor: 'pointer'}}
                                    onClick={() => onSelectRepo(item)}
                                    key={item.id}

                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="item">{item.name}</TableCell>
                                    <TableCell align="right">{item.language}</TableCell>
                                    <TableCell align="right">{item.forks}</TableCell>
                                    <TableCell align="right">{item.stargazers_count}</TableCell>
                                    <TableCell align="right">{item.updated_at}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Pagination/>
        </section>
    );
};

