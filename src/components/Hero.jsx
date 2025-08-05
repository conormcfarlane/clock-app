import React from "react";
import { getGreeting } from "../utils/timeHelper";

export default function Hero() {
  const currentHour = new Date().getHours();
  const greeting = getGreeting(currentHour);
  return <div>{greeting}{currentHour}</div>;
}
