import { WEATHER_API_KEY } from "../const/APIkey"

export const getWeatherURL = (city:string, apiKey?: string) => {
    if(!apiKey) {
        apiKey = WEATHER_API_KEY
    }
    return `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
}

export const getCityURL = (city:string, apiKey?: string) => {

    return `https://spott.p.rapidapi.com/places/autocomplete?q=${city}&limit=4&type=CITY`
}