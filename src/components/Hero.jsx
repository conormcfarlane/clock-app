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
      <section className="py-4">
        <div className="mb-11">
          <div className="flex gap-4">
            <img src={isDayTime ? iconSun : iconMoon} alt="" />
            <div className="text-xl flex">
              <p>{greeting}</p>
              <p>, IT'S CURRENTLY</p>
            </div>
          </div>
          <p className="text-8xl font-bold md:text-[200px]">
            {currentTime}
            <span className="text-lg md:text-2xl">{abbrev}</span>
          </p>
          <p className="text-lg font-semibold md:text-2xl">
            In {userCity} , {userCountry}
          </p>
        </div>
        <Button isMenuOpen={isMenuOpen} MenuToggle={MenuToggle} />
      </section>
      {isMenuOpen && (
        <section className="py-10 bg-neutral-400 -mx-4 px-4 text-black">
          <div className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <div key={index} className="flex justify-between">
                <p>{item.label}</p>
                <p className="font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
