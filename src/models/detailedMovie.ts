import { ICountry } from './country'
import { IGenre } from './genre'
import { ILanguage } from './language'
import { IProductionCompanie } from './productionCompanie'

export interface IDetailedMovie {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: string, // TODO
    budget: number,
    genres: IGenre[],
    homepages: string,
    id: number,
    imdb_id: string,
    origin_country: string[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: IProductionCompanie[],
    production_countries: ICountry[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: ILanguage[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}