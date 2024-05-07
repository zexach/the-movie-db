import React from "react";
import axios, { AxiosResponse } from "axios";
import { tvShowToMediaUtil } from "../utils/tvShowToMediaUtil";
import { ITVShow } from "../models/tvShow";
import { IMedia } from "../models/media";
import { ISearchResult } from "../models/searchResult";
import { IVideo } from "../models/video";
import { IDetailedShow } from "../models/detailedShow";

const BASE_URL: string = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;

const params: {} = {
    params: { 
        api_key: API_KEY
    }
}

export const getTVShows = async(endpoint: string, setTVShows: React.Dispatch<React.SetStateAction<IMedia[]>>) => {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}${endpoint}`, params);
        const tvShows: ITVShow[] = response.data.results.slice(0,10);
        const mediaResults = tvShows.map((show) => tvShowToMediaUtil(show));
        console.log(tvShows);
        setTVShows(mediaResults);
    } catch (e) {
        console.log(e);
    }
}

export const searchTVShows = async(
    endpoint: string, query: string, page: number, setSearchResult: React.Dispatch<React.SetStateAction<ISearchResult | undefined>>) => {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}${endpoint}?query=${query}&page=${page}`, params);
        console.log(response.data);
        setSearchResult(response.data);
    } catch (e) {
        console.log(e);
    }
}

export const getSingleShow = async(endpoint: string, id: number, setShow: React.Dispatch<React.SetStateAction<IDetailedShow | undefined>>) => {
    try {
        const response: AxiosResponse = await axios.get(`${BASE_URL}${endpoint}/${id}`, params);
        console.log(response.data);
        setShow(response.data);
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