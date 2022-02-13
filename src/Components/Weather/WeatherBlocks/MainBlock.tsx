import React from "react"
import { iMain } from "../../../interface/interface"
import WE from '../Weather.module.scss'


export const MainBlock:React.FC<iMain> = ({icon, selectImg, description, name, timezone, temp, feelsLike}: iMain) => {
    return (
        <>
            <h3 className={WE.title}>MAIN CHARACTERISTICS</h3>
                <main className={WE.container}>
                {icon? <img src={selectImg(icon)} alt = {description}/>: <img src = {''}/>}
                    <div className={WE.mainCharacteristics}>
                        <span><b>{name}</b> timezone: {timezone}</span>
                        <span>Temp: {(temp -273.15).toFixed(2)}<span>&#176;</span></span>
                        <span>Feels like: {(feelsLike -273.15).toFixed(2)}<span>&#176;</span></span>
                        <span>Description: {description}</span>
                        {/* <span>Wind: {weather.wind.spe</span> */}
                    </div>
            </main>
        </>
    )
} 