import { IMedia } from "../models/media";
import { ITVShow } from "../models/tvShow";

export const tvShowToMediaUtil = (show: ITVShow): IMedia => {
    return{
        adult: show.adult,
        backdrop_path: show.backdrop_path,
        genre_ids: show.genre_ids,
        id: show.id,
        origin_country: show.origin_country,
        original_language: show.original_language,
        original_name: show.original_name,
        overview: show.overview,
        popularity: show.popularity,
        poster_path: show.poster_path,
        first_air_date: show.first_air_date,
        name: show.name,
        video: undefined,
        vote_average: show.vote_average,
        vote_count: show.vote_count,
        isMovie: false
    };
}