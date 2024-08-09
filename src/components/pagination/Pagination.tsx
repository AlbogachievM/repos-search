import React, {ChangeEvent} from 'react';
import {TablePagination} from "@mui/material";
import {useSelector} from "react-redux";
import {
    selectOrder,
    selectPage,
    selectPerPage,
    selectQuery,
    selectReposTotalCount,
    selectSort
} from "../../selectors/selectors";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {fetchRepos, setPage, setPerPage} from "../../slice/repoListSlice";
export const Pagination = () => {

    const totalCount = useSelector(selectReposTotalCount)
    const currentPage = useSelector(selectPage)
    const rowsPerPage = useSelector(selectPerPage)
    const query = useSelector(selectQuery)
    const sort = useSelector(selectSort)
    const order = useSelector(selectOrder)

    const dispatch = useAppDispatch()

    const onChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
        dispatch(setPage(page))
        dispatch(fetchRepos({q:query, page, per_page: rowsPerPage,sort, order }))
    }

    const onChangeRowsPerPage = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const perPage = +e.target.value
        dispatch(setPerPage(perPage))
        dispatch(fetchRepos({q:query, page:currentPage, per_page: rowsPerPage,sort, order }))
    }
    return (
        <TablePagination
            component="div"
            count={totalCount}
            page={currentPage}
            onPageChange={onChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={onChangeRowsPerPage}
        />
    );
};

