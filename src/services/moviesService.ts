import React from "react";
import axios, { AxiosResponse } from "axios";
import { Movie } from "../models/movie";

const BASE_URL: string = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;

const params: {} = {
    params: { 
        api_key: API_KEY
    }
}

export const getMovies = async(endpoint: string, setMovies: React.Dispatch<React.SetStateAction<Movie[]>>) => {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}${endpoint}`, params);
        console.log(response.data);
        const results: Movie[] = response.data.results.slice(0,10);
        setMovies(results);
    } catch (e) {
        console.log(e);
    }
}

export const searchMovies = async(endpoint: string, query: string, setSearchResult: React.Dispatch<React.SetStateAction<Movie[]>>) => {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}${endpoint}${query}`, params);
        console.log(response.data);
        setSearchResult(response.data.results);
    } catch (e) {
        console.log(e);
    }
}

