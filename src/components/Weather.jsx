import { useEffect, useState } from "react";

const Weather = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async () => {
    const { latitude, longitude } = location;
    // try {
    //   if (latitude !== null) {
    //     const response = await fetch(
    //       `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2728244c87e645e190765ebb90367589`
    //     );

    //     const data = await response.json();

    //     return data;
    //   }
    // } catch (error) {
    //   console.log("Something went wrong");
    // }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2728244c87e645e190765ebb90367589`
    )
      .then((response) => response.json())
      .then((data) => {
        const value = {
          location: data.name,
          country: data.sys.country,
          temperature: (data.main.temp - 273.15).toFixed(2),
          icon: data.weather[0].icon,
        };
        console.log(value);
        setWeatherData(value);
      });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    const { latitude, longitude } = location;
    if (latitude !== null && longitude !== null) {
      console.log(getWeatherData());
    }
  }, [location]);

  return (
    <section className="weather__wrapper">
      {weatherData !== null && (
        <>
          <div className="d-flex col xy-center">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              width="100px"
              height="100px"
              alt="weather-icon"
              className="txt-center"
            />
            <span className="txt-xl txt-bold">
              {weatherData.location} - {weatherData.temperature}°C
            </span>
          </div>
        </>
      )}
    </section>
  );
};

export { Weather };
