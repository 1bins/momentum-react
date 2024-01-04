import React, { useEffect, useState } from "react";

import HeaderArea from "./HeaderArea";

const Weather = ({ weatherHide, setWeatherHide }) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [weatherAPI, setWeatherAPI] = useState();

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          getWeatherByCurrentLocation(lat, lon);
        });
    };

    const getWeatherByCurrentLocation = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        setWeatherAPI(data);
    };

    useEffect(() => {getCurrentLocation();}, []);
    

    return(
        <div id="weather" className={["popup", weatherHide && "hidden"].join(" ")}>
            <HeaderArea onClick={setWeatherHide}></HeaderArea>
            <div className="popup-cont-area">
                <img src={weatherAPI ? `https://openweathermap.org/img/wn/${weatherAPI?.weather[0].icon}@2x.png` : "https://openweathermap.org/img/wn/01n@2x.png"} alt="날씨이미지" id="weather-img" />
                <div className="weather-cont-box">
                    <span id="weather-place">{weatherAPI?.name}</span>
                    <span id="weather-alert">{weatherAPI? `${Math.round(weatherAPI?.main.temp * 10) / 10}℃` : "위치 정보를 알 수 없습니다"}</span>
                    <span id="weather-temp">{weatherAPI?.weather[0].main}</span>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Weather);