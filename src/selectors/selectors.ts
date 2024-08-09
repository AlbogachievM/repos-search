import {AppRootState} from "../store/store";

export const selectReposItems = (state: AppRootState)=> state.repos.items
export const selectReposTotalCount = (state: AppRootState)=> state.repos.total_count
export const selectReposSelected = (state: AppRootState)=> state.repos.selectedRepo
export const selectPerPage = (state: AppRootState)=> state.repos.perPage
export const selectPage = (state: AppRootState)=> state.repos.currentPage
export const selectQuery = (state: AppRootState)=> state.repos.query
export const selectSort = (state: AppRootState)=> state.repos.sort
export const selectOrder = (state: AppRootState)=> state.repos.sortOrder