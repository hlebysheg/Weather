import React, { useEffect, useState } from "react"
import { iWeatherForecast } from "../../interface/interface"
import WE from './Weather.module.scss'
//days weather
import DAY01 from '../../common/img/01d.svg'
import DAY02 from '../../common/img/02d.svg'
import DAY03 from '../../common/img/03d.svg'
import DAY04 from '../../common/img/04d.svg'
import DAY09 from '../../common/img/09d.svg'
import DAY10 from '../../common/img/10d.svg'
import DAY11 from '../../common/img/11d.svg'
import DAY13 from '../../common/img/13d.svg'
import DAY50 from '../../common/img/50d.svg'
//night weather
import NIGHT01 from '../../common/img/01n.svg'
import NIGHT02 from '../../common/img/02n.svg'
import NIGHT03 from '../../common/img/03n.svg'
import NIGHT04 from '../../common/img/04n.svg'
import NIGHT09 from '../../common/img/09n.svg'
import NIGHT10 from '../../common/img/10n.svg'
import NIGHT11 from '../../common/img/11n.svg'
import NIGHT13 from '../../common/img/13n.svg'
import NIGHT50 from '../../common/img/50n.svg'
import { MainBlock } from "./WeatherBlocks/MainBlock"
import { WindBlock } from "./WeatherBlocks/WindBlock"
import { TempBlock } from "./WeatherBlocks/TempBlock"

export const WheatherForecast: React.FC<iWeatherForecast> = ({weather}: iWeatherForecast) => {

    

    const selectWindPower = (speed: number) => {
        if (speed < 1) return "Calm"
        else if (speed < 5) return "Quiet wind"
        else if (speed < 11) return "Light breeze"
        else if (speed < 26) return "moderate wind"
        else if (speed < 44) return "Strong wind"
        else if (speed < 66) return "very strong wind"
        else if (speed < 77) return "storm"
        else if (speed < 104) return "hard storm"
        else if (speed > 104) return "whirlwind"
        else return "Giga Wind"
    }

    const findHeightPercentage = (current:number, max: number) => {
        return (current-220)/(max-200) * 100 +  50 + 'px'  
    }

    const selectImg = (name: string) => {
        
        switch(name) {
            //day
            case '01d': return DAY01
            case '02d': return DAY02
            case '03d': return DAY03
            case '04d': return DAY04
            case '09d': return DAY09
            case '10d': return DAY10
            case '11d': return DAY11
            case '13d': return DAY13
            case '50d': return DAY50
            //night
            case '01n': return NIGHT01
            case '02n': return NIGHT02
            case '03n': return NIGHT03
            case '04n': return NIGHT04
            case '09n': return NIGHT09
            case '10n': return NIGHT10
            case '11n': return NIGHT11
            case '13n': return NIGHT13
            case '50n': return NIGHT50
            default: return DAY03
        }
    }

    if (weather === null){
        
        return <div className={WE.title}>Enter city </div>
    }

    
    return (
        <>
            <MainBlock  icon = {weather.weather[0].icon} 
                        description = {weather.weather[0].description} 
                        name={weather.name} 
                        temp = {weather.main.temp}
                        feelsLike={weather.main.feelsLike}
                        selectImg={selectImg}
                        timezone={weather.timezone}
            />
            <WindBlock  speed={weather.wind.speed}
                        deg={weather.wind.deg}
                        description={selectWindPower(weather.wind.speed)}
            />
            <TempBlock  tempMin={weather.main.tempMin}
                        tempMax={weather.main.tempMax}
                        temp={weather.main.temp}
                        findHeightPercentage={findHeightPercentage}
            />
        </>
    )
}