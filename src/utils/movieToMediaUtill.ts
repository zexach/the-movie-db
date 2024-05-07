import { IMedia } from "../models/media";
import { IMovie } from "../models/movie";

export const movieToMediaUtil = (movie: IMovie): IMedia => {
    return {
        adult: movie.adult,
        backdrop_path: movie.backdrop_path,
        genre_ids: movie.genre_ids,
        id: movie.id,
        origin_country: undefined,
        original_language: movie.original_language,
        original_name: movie.original_title,
        overview: movie.overview,
        popularity: movie.popularity,
        poster_path: movie.poster_path,
        first_air_date: movie.release_date,
        name: movie.title,
        video: movie.video ? true : false,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count
    }
}