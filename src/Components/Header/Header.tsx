import React, { ChangeEvent, useEffect, useState } from "react"
import { iHeader } from "../../interface/interface"
import { SearchList } from "./SearchList"
import HD from './Header.module.scss'

export const Header: React.FC<iHeader> = React.memo(({findCity, cityWeather}: iHeader) => {//setWeather-delete-this
    
    //const inputCity = UseInput()
    const [value, setValue] = useState('')
    const [time, setTime] = useState<any>(null)
    const [city, setCity] = useState<Array<string> | null>(null)
    const [visabl, setVisabl] = useState<boolean> (false)

    const handleFind = () => {
        findCity(value).then((data: Array<any>)=> {
            //convert response to city name
            let city = data.map(el => {
                return el.name
            })

            setCity(city)
        })
        setVisabl(true)
    }

    //events
    const handleClick = (e:React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key==="Enter"){
            cityWeather(value)
            setVisabl(false)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        if(time != null) clearTimeout(time)
        setVisabl(false)
        setValue(e.target.value)
        //Find bar
        setTime(setTimeout(() => {
            handleFind()
        }, 1000))
    }

    const handleBlur = ()=>setVisabl(false)

    const handleFocus = ()=>setVisabl(true)

    return (
    <header className={HD.header}>
        <div className={HD.inputPanel}>
            <input  onChange={handleChange} 
                    value={value} 
                    placeholder="Enter city"
                    onBlur = {handleBlur} 
                    onFocus={handleFocus}
                    onKeyDown={handleClick}
            />
        </div>
        {visabl? <SearchList names={city} setFind= {setValue}/>: ''}
    </header>
    )
})