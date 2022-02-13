import React, { useState } from 'react';
import './App.css';
import{WheatherForecast} from './Components/Weather/WeatherForecast';
import { iWeather } from './interface/interface';
import { HeaderAPIContainer } from './Components/Header/HeaderAPIContainer';


function App() {
  
  const [weather, setWeather] = useState<iWeather|null>(null)
  //

  //
  return (
    <div className="App">
      <HeaderAPIContainer setWeather={setWeather}/> 
      <WheatherForecast weather={weather}/>
    </div>
  );
}

export default App;
//  const weatherBlock = [
//   {
//     id: 11,
//     main: '231',
//     icon: '04d',
//     description: '123' 
//   }
// ]


// const main = {
// feelsLike: 243,
// humidity: 232,
// pressure: 231,
// temp: 261,
// tempMax: 273,
// tempMin: 258,
// }

// const wind = {
// speed: 20,
// deg: 3,
// gust: 32
// }

// const WeatherTest = {
//  weather: weatherBlock,
//  main: main,
//  wind: wind,
//  name: 'London',
//  timezone: 0,
// }