import { useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import { CurrentWeather, Search, Forecast, Navbar } from "./components";
import { CircularProgress } from "@mui/material";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOnSearchChange = (searchData: any) => {
    const [lat, lon] = searchData.value.split(" ");
    setLoading(true);

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async response => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10 px-5 pb-10 flex items-center flex-col">
        <Search onSearchChange={handleOnSearchChange} />
        {loading && <CircularProgress className="mt-40" />}
        {!loading && currentWeather && <CurrentWeather data={currentWeather} />}
        {!loading && forecast && <Forecast data={forecast} />}
      </div>
    </>
  );
}

export default App;
