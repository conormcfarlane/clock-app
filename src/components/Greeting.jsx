import React from "react";
import { getGreeting, isDaytime } from "../utils/timeHelper";
import iconSun from "../assets/images/desktop/icon-sun.svg";
import iconMoon from "../assets/images/desktop/icon-moon.svg";
export default function Greeting() {
  const currentHour = new Date().getHours();
  const greeting = getGreeting(currentHour);
  const isDay = isDaytime(currentHour);

  return (
    <div className="flex gap-4 text-xl">
      <img src={`${isDay ? iconSun : iconMoon}`} alt="" />
      <div className="flex">
        <p>{greeting} </p>
        <p className="hidden md:block">, ITS CURRENTLY</p>
      </div>
    </div>
  );
}
