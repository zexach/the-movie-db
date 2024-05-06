import { ICountry } from './country'
import { IGenre } from './genre'
import { ILanguage } from './language'
import { IProductionCompany } from './productionCompany'

export interface IDetailedMovie {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: string, // TODO
    budget: number,
    genres: IGenre[],
    homepage: string,
    id: number,
    imdb_id: string,
    origin_country: string[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: IProductionCompany[],
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