interface Weather {
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  humidity: number;
  pressure: number;
}

interface Wind {
  speed: number;
}

interface WeatherType {
  city: string;
  weather: Weather[];
  main: Main;
  wind: Wind;
}

interface WeatherDataType {
  data: WeatherType;
}

const CurrentWeather = ({ data }: WeatherDataType) => {
  return (
    <div className="w-full sm:w-[400px] mx-auto bg-white py-5 px-5 rounded mb-10">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-black text-2xl">{data.city}</p>
          <p className="text-black">{data.weather[0].description}</p>
        </div>
        <img className="w-[100px]" src={`/icons/${data.weather[0].icon}.png`} alt="weather" />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-6xl font-bold text-black">{Math.round(data.main.temp)}°C</p>
        <div className="">
          <div className="flex justify-between">
            <span className="text-slate-500 font-bold">Details</span>
          </div>
          <div className="flex justify-between gap-16">
            <span className="text-slate-500">Feels like</span>
            <span className="font-bold text-slate-600">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Wind</span>
            <span className="font-bold text-slate-600">{data.wind.speed} m/s</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Humidity</span>
            <span className="font-bold text-slate-600">{data.main.humidity}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Pressure</span>
            <span className="font-bold text-slate-600">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
