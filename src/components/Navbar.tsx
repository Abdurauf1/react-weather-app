import weatherImg from "../assets/images/weather.png";

const Nav = () => {
  return (
    <nav className="w-full shadow-md">
      <div className="container mx-auto">
        <a href="/" className="w-fit flex items-center gap-3 py-5">
          <img className="w-[45px]" src={weatherImg} alt="weather-icon" />
          <h1 className="text-xl font-bold">Weather Forecast</h1>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
