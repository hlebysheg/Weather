export const compareResponeCity = (data:any) => {
    //convert to cable case style
    let weather = {
        id: data.weather[0].id,
        main: data.weather[0].main,
        icon: data.weather[0].icon,
        description: data.weather[0].description
    }
    
    let mainBlock = {
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temp: data.main.temp,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,
    }

    return {
        weather: [weather],
        main: mainBlock,
        name: data.name,
        timezone: data.timezone,
        wind: data.wind
    }
}

export const compareResponseCityName = (data: any) => {
    
}