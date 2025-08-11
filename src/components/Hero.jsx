import React from "react";
import { greetingHelper, isDaytimeHelper } from "../utils/timeHelper";
import iconSun from "../assets/images/desktop/icon-sun.svg";
import iconMoon from "../assets/images/desktop/icon-moon.svg";
import { useTimeLocation } from "../context/timeLocationContext";
export default function Hero() {
  const { data, loading, error } = useTimeLocation();
  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data available</div>;

  // NOW use the API time data
  const apiTime = new Date(data.datetime);
  const currentHour = apiTime.getHours();
  const greeting = greetingHelper(currentHour);
  const isDayTime = isDaytimeHelper(currentHour);
  const userCity = data.timezone.split("/").pop();

  return (
    <section className="bg-red-500">
      <div className="flex gap-4">
        <img src={isDayTime ? iconSun : iconMoon} alt="" />
        <p className="text-xl">{greeting}</p>
      </div>
      <p>{userCity}</p>
    </section>
  );
}
