import React from "react";
import axios, { AxiosResponse } from "axios";
import { IMovie } from "../models/movie";
import { ISearchResult } from "../models/searchResult";

const BASE_URL: string = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;

const params: {} = {
    params: { 
        api_key: API_KEY
    }
}

export const getMovies = async(endpoint: string, setMovies: React.Dispatch<React.SetStateAction<IMovie[]>>) => {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}${endpoint}`, params);
        const results: IMovie[] = response.data.results.slice(0,10);
        setMovies(results);
    } catch (e) {
        console.log(e);
    }
}

export const searchMovies = async(
    endpoint: string, query: string, page: number, setSearchResult: React.Dispatch<React.SetStateAction<ISearchResult | undefined>>) => {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}${endpoint}?query=${query}&page=${page}`, params);
        console.log(response.data);
        setSearchResult(response.data);
    } catch (e) {
        console.log(e);
    }
}

