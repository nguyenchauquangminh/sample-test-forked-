import WeatherFinder from "./app/components/weather-finder/WeatherFinder";
import Nav from "./app/shell/Nav";
import "./App.scss";
import { useState } from "react";

export interface WeatherResponse {
  name: string;
  weather: string;
  status: string[];
}

const getDegree = (text: string) => Number(text.replace(" degree", ""));

function App() {
  const [weatherResponse, setWeatherResponse] = useState<
    WeatherResponse | undefined | null
  >(undefined);

  return (
    <div className="App">
      <Nav></Nav>
      <div className="layout-column align-items-center">
        <WeatherFinder setWeatherResponse={setWeatherResponse}></WeatherFinder>
      </div>
      {weatherResponse && (
        <div className="result-temperature">
          <div>
            {getDegree(weatherResponse.weather) < 20 ? (
              <i className="icon-cold"></i>
            ) : (
              <i className="icon-sunny"></i>
            )}
          </div>
          <div>
            <div>
              {weatherResponse.status.map((item) => {
                const [name, value] = item.split(" ");

                return (
                  <div id={item}>
                    <span>{name}</span>
                    <span>{value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {weatherResponse === null && (
        <div className="no-result">No Results Found</div>
      )}
    </div>
  );
}

export default App;
