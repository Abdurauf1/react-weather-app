import weatherImg from "/images/weather.png";

const Navbar = () => {
  return (
    <nav className="w-full shadow-md">
      <div className="container px-6 mx-auto">
        <a href="/" className="w-fit flex items-center gap-3 py-4">
          <img className="w-[45px]" src={weatherImg} alt="weather-icon" />
          <h1 className="text-xl font-bold">Weather Forecast</h1>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
