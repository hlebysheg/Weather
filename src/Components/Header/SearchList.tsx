import React, { ChangeEvent, useEffect, useState } from "react"
import { iSearchCity } from "../../interface/interface"
import HD from './Header.module.scss'

export const SearchList: React.FC<iSearchCity> = ({names, setFind}: iSearchCity) => {

    if(names === null){
        return <></>
    }
    
    const cityList = names.map((el, id) => {
        return <div className={HD.searchElem} key = {id} onMouseDown={() => setFind(el)}>{el}</div>
    })

    return (
    <div className={HD.findBox}>
        {cityList}
    </div>
    )
}