import './Weather.scss';
import { Layout } from '../../Layout/Layout';
import { ChangeEvent, useEffect, useState } from 'react';
import { getWeatherData } from '../../services/servicesWeather';

import { TfiSearch } from 'react-icons/tfi';
import { IoCloseOutline } from 'react-icons/io5';
import { WeatherApiResponse } from '../../Interfaces';
import { SideBar } from '../../components/SideBar/SideBar';
import { Loader } from '../../components/UI/Loader/Loader';

export const Weather = () => {
  const [weather, setWeather] = useState<WeatherApiResponse | string>('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      if (city !== '') {
        const data = await getWeatherData(city);
        setWeather(data);
        setLoading(false);
      }
    } catch (error) {
      let errorMessage = 'Failed to make a request';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <Layout>
      <section className="weather">
        <div className="container">
          <SideBar />
          <div className="weather__info">
            <h2 className="title">Weather</h2>
            {loading && loading && <Loader />}
          </div>
          <div className="weather__wrapper">
            <div className="weather__search">
              <input
                type="text"
                className="weather__search-input"
                placeholder="Search... "
                value={city}
                onKeyPress={(e) => e.key === 'Enter' && getData()}
                onChange={handleChange}
              />
              {!city.length ? (
                <TfiSearch size={24} className="weather__search-icon" />
              ) : (
                <IoCloseOutline onClick={() => setCity('')} size={24} className="weather__search-icon" />
              )}
              <button onClick={() => getData()} className="weather__search-btn">
                Search
              </button>
            </div>
            {typeof weather === 'object' && weather !== null ? (
              <div className="weather__information">
                <div className="weather__information-left">
                  <div className="weather__information-title">
                    {weather.name} | {weather.sys.country}
                  </div>
                  <div className="weather__information-temp">{(weather.main.temp - 273.15).toFixed(1)} &deg;C</div>
                </div>
                <div className="weather__information-center">
                  <div className="weather__information-block-temp">
                    Min : {(weather.main.temp_min - 273.15).toFixed(1)} <span>&deg;C</span>
                  </div>
                  <div className="weather__information-block-temp">
                    Max : {(weather.main.temp_max - 273.15).toFixed(1)} <span>&deg;C</span>
                  </div>
                  <div className="weather__information-block">
                    <div className="weather__information-block-text">{weather.weather[0].main}</div>
                    <img src={`http://api.openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="icon" />
                  </div>
                </div>
                <div className="weather__information-right">
                  <div className="weather__information-other">
                    Humidity : {weather.main.humidity} <span>%</span>
                  </div>
                  <div className="weather__information-other">
                    Pressure : {weather.main.pressure} <span>hPa</span>
                  </div>
                  <div className="weather__information-other">
                    Wind Speed : {weather.wind.speed} <span>m/s</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="weather__empty">Specify the correct city or country</div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};
