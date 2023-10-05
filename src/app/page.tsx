"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  IconTemperatureCelsius,
  IconMapPinFilled,
  IconTemperatureFahrenheit,
} from "@tabler/icons-react";
import Clear from "@public/images/Clear.png";
import WeatherCard from "@/components/weather-card";
import HighlightsCard from "@/components/highlights-card";
import SearchMenu from "@/components/search-menu";
import { forecastData, weatherData } from "./data";

export default function Home() {
  const [measure, setMeasure] = useState("C");
  const [weather, setWeather] = useState<any>(weatherData);
  const [forecast, setForecast] = useState<any>(forecastData);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ec68675c99e6b16a7b0afd60eacb4c9a",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(async (response) => {
        const data = await response.json();
      })
      .catch();
  }, []);

  return (
    <main className="flex md:h-[100vh] flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/3 flex flex-col items-center h-full bg-[#1e213a]">
        <SearchMenu />
        <div className="h-[375px] bg-[url(/images/Cloud-background.png)] bg-repeat w-full">
          <div className="bg-[#1e213a] bg-opacity-90 w-full h-full flex justify-center items-center">
            <Image alt="today-weather" src={Clear} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-baseline mb-20">
            <h1 className="text-[144px]">
              {measure === "C"
                ? (weather.main.temp - 273.15).toFixed(0)
                : ((weather.main.temp - 273.15) * (9 / 5) + 32).toFixed(0)}
            </h1>
            {measure === "C" ? (
              <IconTemperatureCelsius color="#A09FB1" size={60} />
            ) : (
              <IconTemperatureFahrenheit color="#A09FB1" size={60} />
            )}
          </div>
          <h2 className="text-[36px] text-[#A09FB1] mb-20">Shower</h2>
          <p className="text-[#A09FB1] mb-8">Today</p>
          <div className="flex items-center gap-1 mb-14 text-[#A09FB1]">
            <IconMapPinFilled />
            <p>{weather.name}</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 h-full flex flex-col">
        <div className="flex justify-end mr-[55px] md:mr-[125px] mt-11">
          <button
            onClick={() => {
              setMeasure("C");
            }}
            className={`h-[40px] w-[40px] rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mr-3 ${
              measure === "C"
                ? "bg-[#e7e7eb] text-[#110e3c]"
                : "bg-[#585676] text-[#e7e7eb]"
            }`}
          >
            <IconTemperatureCelsius className="m-auto" />
          </button>
          <button
            onClick={() => {
              setMeasure("F");
            }}
            className={`bg-[#585676] h-[40px] w-[40px] rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ${
              measure === "F"
                ? "bg-[#e7e7eb] text-[#110e3c]"
                : "bg-[#585676] text-[#e7e7eb]"
            }`}
          >
            <IconTemperatureFahrenheit className="m-auto" />
          </button>
        </div>
        <div className="mt-[44px]  md:mt-[65px] mx-[55px] md:mx-[125px] flex-wrap flex flex-row gap-[26px] justify-between md:justify-center">
          <WeatherCard
            icon={forecast.list[2].weather[0]}
            measure={measure}
            minTemp={forecast.list[2].main.temp_min}
            maxTemp={forecast.list[2].main.temp_max}
          />
          <WeatherCard
            icon={forecast.list[10].weather[0]}
            measure={measure}
            minTemp={forecast.list[10].main.temp_min}
            maxTemp={forecast.list[10].main.temp_max}
          />
          <WeatherCard
            icon={forecast.list[18].weather[0]}
            measure={measure}
            minTemp={forecast.list[18].main.temp_min}
            maxTemp={forecast.list[18].main.temp_max}
          />
          <WeatherCard
            icon={forecast.list[26].weather[0]}
            measure={measure}
            minTemp={forecast.list[26].main.temp_min}
            maxTemp={forecast.list[26].main.temp_max}
          />
          <WeatherCard
            icon={forecast.list[34].weather[0]}
            measure={measure}
            minTemp={forecast.list[34].main.temp_min}
            maxTemp={forecast.list[34].main.temp_max}
          />
        </div>
        <div className="mt-[32px] mx-[25px] md:mx-[125px]">
          <h2 className="text-[24px] font-bold text-[#E7E7EB] mb-[32px]">
            Today highlights
          </h2>
          <div className="flex flex-col md:flex-row items-center md:justify-center gap-[48px] mb-[48px]">
            <HighlightsCard
              title="Wind status"
              value={Math.round(weather.wind.speed * 2.23693629)}
              measure="mph"
            />
            <HighlightsCard
              title="Humidity"
              value={weather.main.humidity}
              measure="%"
            >
              <progress
                max={100}
                value={weather.main.humidity}
                className="rounded-xl"
              ></progress>
            </HighlightsCard>
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-center gap-[48px] mb-[60px] md:mb-0">
            <HighlightsCard
              title="Visibility"
              value={Math.round(weather.visibility / 1609)}
              measure=" milles"
            />
            <HighlightsCard
              title="Air Pressure"
              value={weather.main.pressure}
              measure=" mb"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
