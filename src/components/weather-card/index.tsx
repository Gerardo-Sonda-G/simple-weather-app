import React from "react";
import Image from "next/image";
import Clear from "@public/images/Clear.png";
import Hail from "@public/images/Hail.png";
import HeavyCloud from "@public/images/HeavyCloud.png";
import HeavyRain from "@public/images/HeavyRain.png";
import LightCloud from "@public/images/LightCloud.png";
import LightRain from "@public/images/LightRain.png";
import Shower from "@public/images/Shower.png";
import Sleet from "@public/images/Sleet.png";
import Snow from "@public/images/Snow.png";
import ThunderStorm from "@public/images/Thunderstorm.png";

import {
  IconTemperatureCelsius,
  IconTemperatureFahrenheit,
} from "@tabler/icons-react";

interface props {
  icon: {
    icon: string;
    description: string;
  };
  measure: string;
  minTemp: number;
  maxTemp: number;
}

const WeatherCard = ({ icon, measure, minTemp, maxTemp }: props) => {
  return (
    <div className="h-[177px] w-[120px] bg-[#1E213A]">
      <div className=" flex flex-col items-center h-full w-full">
        <p className="mt-[12px]">tomorrow</p>
        <Image
          src={`https://openweathermap.org/img/wn/${icon.icon.replace(
            "n",
            "d"
          )}@2x.png`}
          alt={icon.description}
          height={62}
          width={57}
          className="mb-8 mt-[10px] ml-[-8px] min-h-[62px]"
        />
        <div className="flex gap-4">
          <div className="flex items-end">
            <h1 className="text-[16px]">
              {measure === "C"
                ? (minTemp - 273.15).toFixed(0)
                : ((minTemp - 273.15) * (9 / 5) + 32).toFixed(0)}
            </h1>
            {measure === "C" ? (
              <IconTemperatureCelsius color="#A09FB1" size={24} />
            ) : (
              <IconTemperatureFahrenheit color="#A09FB1" size={24} />
            )}
          </div>
          <div className="flex items-end">
            <h1 className="text-[16px]">
              {" "}
              {measure === "C"
                ? (maxTemp - 273.15).toFixed(0)
                : ((maxTemp - 273.15) * (9 / 5) + 32).toFixed(0)}
            </h1>
            {measure === "C" ? (
              <IconTemperatureCelsius color="#A09FB1" size={24} />
            ) : (
              <IconTemperatureFahrenheit color="#A09FB1" size={24} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
