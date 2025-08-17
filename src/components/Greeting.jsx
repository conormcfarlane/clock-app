import React from "react";
import { getGreeting, isDaytime } from "../utils/timeHelper";
import iconSun from "../assets/images/desktop/icon-sun.svg";
import iconMoon from "../assets/images/desktop/icon-moon.svg";
export default function Greeting() {
  const currentHour = new Date().getHours();
  const greeting = getGreeting(currentHour);
  const isDay = isDaytime(currentHour);

  return (
    <div className="flex gap-4">
      <img src={`${isDay ? iconSun : iconMoon}`} alt="" />
      <p>{greeting} </p>
    </div>
  );
}
