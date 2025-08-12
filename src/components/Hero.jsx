import React, { useState } from "react";
import { greetingHelper, isDaytimeHelper } from "../utils/timeHelper";
import iconSun from "../assets/images/desktop/icon-sun.svg";
import iconMoon from "../assets/images/desktop/icon-moon.svg";
import { useTimeLocation } from "../context/timeLocationContext";
import Button from "./Button";
export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const { data, loading, error } = useTimeLocation();
  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data available</div>;

  // NOW use the API time data
  const apiTime = new Date(data.datetime);
  const currentHour = apiTime.getHours();
  const currentMins = apiTime.getMinutes();
  const currentTime = currentHour + ":" + currentMins;
  const greeting = greetingHelper(currentHour);
  const isDayTime = isDaytimeHelper(currentHour);
  const userCity = data.timezone.split("/").pop();
  const userCountry = data.timezone.split("/").shift();
  const abbrev = data.abbreviation;

  const menuItems = [
    { label: "CURRENT TIMEZONE", value: data?.timezone },
    { label: "DAY OF THE YEAR", value: data?.day_of_year },
    { label: "DAY OF THE WEEK", value: data?.day_of_week },
    { label: "WEEK NUMBER", value: data?.week_number },
  ];
  return (
    <>
      <section className="bg-red-500">
        <div>
          <div className="flex gap-4">
            <img src={isDayTime ? iconSun : iconMoon} alt="" />
            <p className="text-xl">{greeting}</p>
          </div>
          <p className="text-7xl">
            {currentTime}
            <span className="text-lg">{abbrev}</span>
          </p>
          <p>
            In {userCity} , {userCountry}
          </p>
        </div>
        <Button isMenuOpen={isMenuOpen} MenuToggle={MenuToggle} />
      </section>
      {isMenuOpen && (
        <section className="bg-blue-900 py-10">
          <div className="flex flex-col gap-4">
            {menuItems.map((item,index) => (
            <div key={index} className="flex justify-between">
              <p>{item.label}</p>
              <p className="font-semibold">{item.value}</p>
            </div>
          ))}
          </div>
          
        </section>
      )}
    </>
  );
}
