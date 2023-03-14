import { useState } from "react";
import { WeatherResponse } from "../../../App";

const API_URL = "https://jsonmock.hackerrank.com/api/weather";

interface WeatherFinderProps {
  setWeatherResponse?: React.SetStateAction<
    React.Dispatch<WeatherResponse | undefined>
  >;
}
interface WeatherFinderProps {
  setWeatherResponse?: React.SetStateAction<
    React.Dispatch<WeatherResponse | undefined>
  >;
}

export default function WeatherFinder({
  setWeatherResponse,
}: WeatherFinderProps) {
  const [inputValue, setInputvalue] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputvalue(value);
  };

  const onSearch = async () => {
    const data = await (await fetch(`${API_URL}?name=${inputValue}`)).json();
    console.log(data);
    setWeatherResponse?.(data.data[0]);
  };

  return (
    <div className="weather-data w-[90%] items-center mt-50">
      <section className="grid grid-cols-6 gap-1 justify-center items-center">
        <input
          value={inputValue}
          type="text"
          className="col-start-2 col-span-3 p-2 h-[45px] mr-12 bg-slate-100 rounded-sm"
          placeholder="Dallas"
          onChange={onInputChange}
        />
        <button
          onClick={onSearch}
          className="bg-green-600 text-white w-[100px] rounded-sm"
        >
          Search
        </button>
      </section>
      <section className="mt-20 layout-row align-items-center justify-content-center">
        <div className="card weather-details outlined"></div>
      </section>
    </div>
  );
}
