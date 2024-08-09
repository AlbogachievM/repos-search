import axios from "axios";

// Создаеться экземпляр axios с базовым URL
const instanse = axios.create({
    baseURL: 'https://api.github.com'
})

//Типизация параметров запроса для получения репозиториев
export type RequestArg = {
    q: string
    page:number
    per_page: number
    sort:string
    order:string
}

/**
 * Запрашивает репозитории с заданными параметрами.
 * @param params - Параметры запроса (поисковый запрос, страница, количество на странице, сортировка, порядок сортировки)
 * @returns Ответ от API GitHub с данными о репозиториях
 */

export const reposAPI = {
    fetchRepos(params: RequestArg) {
        return instanse('/search/repositories', {params})
    },

}