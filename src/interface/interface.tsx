type weather = {
    id: number
    main: string
    icon: string
    description: string
}

type main = {
    feelsLike: number
    humidity: number
    pressure: number
    temp: number
    tempMax: number
    tempMin: number
}

type wind = {
    speed: number
    deg: number
    gust: number
}

export interface iWeather {
     weather: Array<weather>
     main: main
     wind: wind
     name: string
     timezone: number
}

export interface iHeaderContainer {
    setWeather: (Weather: iWeather|null) => void
}

export interface iHeader {
    cityWeather: (cityName: string) => void
    findCity: (city: string) => Promise<Array<string>>
    
    // cityWeather: any
}

export interface iWeatherForecast {
    weather: iWeather | null
}

export interface iSearchCity {
    names: Array<string> | null
    setFind: (city: string)=>void
}

export interface iMain {
    icon: string
    selectImg: (img: string) => string
    description: string
    name: string
    timezone: number
    temp: number
    feelsLike: number
}

export interface iWind {
    speed: number
    deg: number
    description: string
}

export interface iTempBlock {
    tempMin: number
    tempMax: number
    temp: number
    findHeightPercentage: (tempMin: number, tempMax: number) => string
}
    // enum WeatherStatus {
    //     //day
    //     clearSky = '01',
    //     fewClouds = '02',
    //     scatteredClouds = '03',
    //     brokenClouds = '04',
    //     showerRain = '09',
    //     rain = '10',
    //     thunderstorm = '11',
    //     snow = '13',
    //     mist = '50',
    // }

    // enum dayState {
    //     day = 'd',
    //     night = 'n',
    // }