import { ExpandMore } from "@mui/icons-material/";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

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

const WEEK_DAYS: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

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
          <AccordionSummary expandIcon={<ExpandMore />}>
            <div className="w-full flex justify-between">
              <div className="flex items-center gap-3">
                <img className="w-12" src={`icons/${item.weather[0].icon}.png`} alt="weather" />
                <label className="font-semibold text-black">{forecastDays[index]}</label>
              </div>
              <div className="flex items-center gap-3 mr-3">
                <label className="font-semibold">{item.weather[0].description}</label>
                <label className="text-xs">
                  {Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C
                </label>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex justify-between gap-3">
              <div className="w-1/2">
                <div className="flex justify-between">
                  <label>Pressure:</label>
                  <label className="text-slate-500">{item.main.pressure}</label>
                </div>
                <div className="flex justify-between">
                  <label>Humidity:</label>
                  <label className="text-slate-500">{item.main.humidity}</label>
                </div>
                <div className="flex justify-between">
                  <label>Clouds:</label>
                  <label className="text-slate-500">{item.clouds.all}%</label>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex justify-between">
                  <label>Wind speed:</label>
                  <label className="text-slate-500">{item.wind.speed} m/s</label>
                </div>
                <div className="flex justify-between">
                  <label>Sea level:</label>
                  <label className="text-slate-500">{item.main.sea_level}m</label>
                </div>
                <div className="flex justify-between">
                  <label>Feels like:</label>
                  <label className="text-slate-500">{item.main.feels_like}°C</label>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default Forecast;
