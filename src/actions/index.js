import axios from 'axios';

const API_KEY = '0537f6af70b63f006ca3dd4ba7d1f45b';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${URL}&q=${city},pl`;
    const request = axios.get(url);
    
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}