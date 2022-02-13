import React from "react"
import { iWind } from "../../../interface/interface"
import WE from '../Weather.module.scss'


export const WindBlock:React.FC<iWind> = ({speed, deg, description}: iWind) => {
    return (
        <>
        <h3 className={WE.title}>WIND CHARACTERISTICS</h3>
        <div className={WE.wind}>
            <div>
            </div>
            <div className={WE.Charac}>
                <span>Wind speed: {speed}meter/sec</span>
                <span>Wind degree: {deg}c</span>
                <span>description: {description}</span>
            </div>
        </div>
        </>
    )
}