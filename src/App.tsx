import WeatherFinder from "./app/components/weather-finder/WeatherFinder";
import Nav from "./app/shell/Nav";
import "./App.scss";
import { useState } from "react";

export interface WeatherResponse {
  name: string;
  weather: string;
  status: string[];
}

function App() {
  const [weatherResponse, setWeatherResponse] = useState<
    WeatherResponse | undefined
  >(undefined);

  return (
    <div className="App">
      <Nav></Nav>
      <div className="layout-column align-items-center">
        <WeatherFinder setWeatherResponse={setWeatherResponse}></WeatherFinder>
      </div>
      {weatherResponse && (
        <div className="result-temperature">
          <div>{weatherResponse.weather}</div>
          <div>
            <div>
              {weatherResponse.status.map((item) => {
                const [name, value] = item.split(' ')););

                return (
                  <div id={item}>
                    <div>{name}</div>
                    <div>{value}</div>
                  </div>
                );
              })}
            </div>
            <div>{weatherResponse.status}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
