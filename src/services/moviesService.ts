import React from "react";
import axios, { AxiosResponse } from "axios";
import { IMovie } from "../models/movie";
import { ISearchResult } from "../models/searchResult";
import { IDetailedMovie } from "../models/detailedMovie";
import { IVideo } from "../models/video";
import { IMedia } from "../models/media";
import { movieToMediaUtil } from "../utils/movieToMediaUtill";

const BASE_URL: string = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;

const params: {} = {
    params: { 
        api_key: API_KEY
    }
}

export const getMovies = async(endpoint: string, setMovies: React.Dispatch<React.SetStateAction<IMedia[]>>) => {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}${endpoint}`, params);
        const results: IMovie[] = response.data.results.slice(0,10);
        const mediaResults: IMedia[] = results.map((result) => movieToMediaUtil(result));
        setMovies(mediaResults);
    } catch (e) {
        console.log(e);
    }
}

export const searchMovies = async(
    endpoint: string, query: string, page: number, setSearchResult: React.Dispatch<React.SetStateAction<ISearchResult | undefined>>) => {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}${endpoint}?query=${query}&page=${page}`, params);
        const results: IMovie[] = response.data.results;
        const mediaResults: IMedia[] = results.map((result) => movieToMediaUtil(result));

        const searchResult: ISearchResult = {
            page: response.data.page,
            results: mediaResults,
            total_pages: response.data.total_pages,
            total_results: response.data.total_results
        }

        console.log(searchResult);

        setSearchResult(searchResult);
    } catch (e) {
        console.log(e);
    }
}

export const getSingleMovie = async(endpoint: string, id: number, setMovie: React.Dispatch<React.SetStateAction<IDetailedMovie | undefined>>) => {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}${endpoint}/${id}`, params);
        console.log(response.data);
        setMovie(response.data);
    } catch (e) {
        console.log(e);
    }
}

export const getTrailer = async(endpoint: string, id: number, setTrailer: React.Dispatch<React.SetStateAction<IVideo | undefined>>) => {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}${endpoint}/${id}/videos`, params);
        console.log(response.data.results.filter((item: IVideo) => item.type === 'Trailer'));
        const trailer: IVideo[] = response.data.results.filter((item: IVideo) => item.type === 'Trailer');
        setTrailer(trailer[0]);
    } catch (e) {
        console.log(e);
    }
}

