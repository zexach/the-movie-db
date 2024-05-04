import { IMovie } from "./movie";

export interface ISearchResult {
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number
}