const getWeatherData = async (location, setWeatherData) => {
  const { latitude, longitude } = location;

  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2728244c87e645e190765ebb90367589`;

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
      console.error(
        "Something went wrong with OPEN WEATHER API ! Try again after refreshing the page"
      );
    });
};

export { getWeatherData };
