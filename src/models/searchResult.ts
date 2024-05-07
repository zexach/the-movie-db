import { IMedia } from "./media";

export interface ISearchResult {
    page: number,
    results: IMedia[],
    total_pages: number,
    total_results: number
}