import React from "react"
import { CITY_API_KEY } from "../../common/const/APIkey"
import { compareResponeCity } from "../../common/Functions/compareResponse"
import { getCityURL, getWeatherURL } from "../../common/Functions/createURL"
import { useHttp } from "../../Hooks/UseHttp"
import { iHeaderContainer } from "../../interface/interface"
import { Header } from "./Header"

export const HeaderAPIContainer: React.FC<iHeaderContainer> = ({setWeather}:iHeaderContainer) => {


    const {loading, request, error, clearError} = useHttp()
    //http
    const setCityWeather = async (cityName: string) => {
        
        try {
            const data = await  request(getWeatherURL(cityName), 'GET')
            console.log(data)
            if(data.cod === 200){
                setWeather(compareResponeCity(data))
            }
            
        }
        catch (e:any) {
            alert('we cant find your city(')
        }
    }

    const findCity = async (name: string) => {

        let headers = new Map()
        headers.set('x-rapidapi-key', CITY_API_KEY)
        headers.set('x-rapidapi-host', "spott.p.rapidapi.com")

        try{
            const data = await request(getCityURL(name),'GET',null ,headers) //comment becouse limets on req 
            return data
        }
        catch (e: any){
            //console.log(e)
        }
        return ['','']   
    }


    return (
        <Header findCity={findCity} cityWeather={setCityWeather}/>
    )
}