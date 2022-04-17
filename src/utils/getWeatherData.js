const getWeatherData = async (location, setWeatherData) => {
  const { latitude, longitude } = location;

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  fetch(WEATHER_API_URL)
    .then((response) => response.json())
    .then((data) => {
      const value = {
        location: data.name,
        country: data.sys.country,
        temperature: (data.main.temp - 273.15).toFixed(2),
        icon: data.weather[0].icon,
      };

      setWeatherData(value);
    })
    .catch((error) => {
      console.log("Something went wrong ! Refresh the page after 1 min");
    });
};

export { getWeatherData };
