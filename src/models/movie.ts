export interface IMovie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    video: boolean;
    poster_path: string;
    popularity: number;
    original_title: string;
    original_language: string;
    backdrop_path: string;
    adult: boolean;
    vote_count: number;
    vote_average: number;
    genre_ids: number[];
};