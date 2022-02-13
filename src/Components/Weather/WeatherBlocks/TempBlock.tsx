import React from "react"
import { iTempBlock } from "../../../interface/interface"
import WE from '../Weather.module.scss'


export const TempBlock: React.FC<iTempBlock> = ({tempMin, tempMax, temp, findHeightPercentage}: iTempBlock) => {
    return (
        <>
        <h3 className={WE.title}>{'daily temperature profile'.toUpperCase()}</h3>

        <div className={WE.temp}>
            <div className={WE.tempElem}>
                <span>MIN</span>
                <div className={WE.display} style ={{height: findHeightPercentage(tempMin, tempMax)}}>
                    <span>{(tempMin -273.15).toFixed(2)}<span>&#176;</span></span>
                </div>
            </div>

            <div className={WE.tempElem}>
                <span>CURRENT</span>
                <div className={WE.display} style ={{height: findHeightPercentage(temp, tempMax)}}>
                    <span>{(temp -273.15).toFixed(2)}<span>&#176;</span></span>
                </div>
            </div>

            <div className={WE.tempElem}>
                <span>MAX</span>
                <div className={WE.display} style ={{height: findHeightPercentage(tempMax, tempMax)}}>
                    <span>{(tempMax -273.15).toFixed(2)}<span>&#176;</span></span>
                </div>
            </div>
            
        </div>
        </>
    )
}