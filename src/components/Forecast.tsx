import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const WEEK_DAYS: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

interface Weather {
  description: string;
  icon: string;
}

interface Main {
  temp_max: number;
  temp_min: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  feels_like: number;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
}

interface ForecastItem {
  weather: Weather[];
  main: Main;
  clouds: Clouds;
  wind: Wind;
}

interface ForecastData {
  list: ForecastItem[];
}

interface WeatherDataType {
  data: ForecastData;
}

const Forecast = ({ data }: WeatherDataType) => {
  const dayInAWeek: number = new Date().getDay();

  const forecastDays: string[] = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <h1 className="text-3xl font-semibold mb-3">Daily</h1>
      {data.list.splice(0, 7).map((item: ForecastItem, index: number) => (
        <Accordion key={index} className="rounded mb-1">
          <AccordionSummary>
            <div className="flex justify-between">
              <div className="flex items-center">
                <img className="w-12" src={`icons/${item.weather[0].icon}.png`} alt="weather" />
                <label className="font-semibold text-black">{forecastDays[index]}</label>
              </div>
              <div className="flex items-center">
                <label>{item.weather[0].description}</label>
                <label>
                  {Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C
                </label>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div>
                <label>Pressure:</label>
                <label>{item.main.pressure}</label>
              </div>
              <div>
                <label>Humidity:</label>
                <label>{item.main.humidity}</label>
              </div>
              <div>
                <label>Clouds:</label>
                <label>{item.clouds.all}%</label>
              </div>
              <div>
                <label>Wind speed:</label>
                <label>{item.wind.speed} m/s</label>
              </div>
              <div>
                <label>Sea level:</label>
                <label>{item.main.sea_level}m</label>
              </div>
              <div>
                <label>Feels like:</label>
                <label>{item.main.feels_like}°C</label>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default Forecast;
