import React from "react";
import axios, { AxiosResponse } from "axios";
import { ISearchResult } from "../models/searchResult";
import { IVideo } from "../models/video";
import { IMedia } from "../models/media";

const BASE_URL: string = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;

const params: {} = {
    params: { 
        api_key: API_KEY
    }
}

export const getItems = async<T>(
    endpoint: string,
    setItems: React.Dispatch<React.SetStateAction<IMedia[]>>,
    mapper: (item: T) => IMedia) => {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}${endpoint}`, params);
        const results: T[] = response.data.results.slice(0,10);
        const mediaResults: IMedia[] = results.map((result) => mapper(result));
        setItems(mediaResults);
    } catch (e) {
        console.log(e);
    }
}

export const searchItems = async<T>(
    endpoint: string,
    query: string,
    page: number,
    setSearchResult: React.Dispatch<React.SetStateAction<ISearchResult | undefined>>,
    mapper: (item: T) => IMedia) => {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}${endpoint}?query=${query}&page=${page}`, params);
        const results: T[] = response.data.results;
        const mediaResults: IMedia[] = results.map((result) => mapper(result));

        const searchResult: ISearchResult = {
            page: response.data.page,
            results: mediaResults,
            total_pages: response.data.total_pages,
            total_results: response.data.total_results
        }

        setSearchResult(searchResult);
    } catch (e) {
        console.log(e);
    }
}

export const getSingleMedia = async<T>(endpoint: string, id: number, setMedia: React.Dispatch<React.SetStateAction<T | undefined>>) => {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}${endpoint}/${id}`, params);
        setMedia(response.data);
    } catch (e) {
        console.log(e);
    }
}

export const getTrailer = async(endpoint: string, id: number, setTrailer: React.Dispatch<React.SetStateAction<IVideo | undefined>>) => {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}${endpoint}/${id}/videos`, params);
        const trailer: IVideo[] = response.data.results.filter((item: IVideo) => item.type === 'Trailer');
        setTrailer(trailer[0]);
    } catch (e) {
        console.log(e);
    }
}

