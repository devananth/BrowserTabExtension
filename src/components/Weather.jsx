import { useEffect, useState } from "react";
import { getWeatherData } from "../utils";

const Weather = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [weatherData, setWeatherData] = useState(null);

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
      getWeatherData(location, setWeatherData);
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
