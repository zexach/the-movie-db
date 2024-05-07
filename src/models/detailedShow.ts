import { ICountry } from "./country";
import { ICreator } from "./creator";
import { IEpisode } from "./episode";
import { IGenre } from "./genre";
import { ILanguage } from "./language";
import { IProductionCompany } from "./productionCompany";
import { ISeason } from "./season";

export interface IDetailedShow {
    adult: boolean,
    backdrop_path: string,
    created_by: ICreator[],
    episode_run_time: any[],
    first_air_date: string,
    genres: IGenre[],
    homepage: string,
    id: number,
    in_production: boolean,
    languages: string[],
    last_air_date: string,
    last_episode_to_air: IEpisode,
    name: string, 
    next_episode_to_air: IEpisode,
    networks: IProductionCompany[],
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: IProductionCompany[],
    production_countries: ICountry[],
    seasons: ISeason[],
    spoken_languages: ILanguage[],
    status: string,
    tagline: string,
    type: string,
    vote_average: number,
    vote_count: number
}