import React from "react";
import { useTimeLocation } from "../context/timeLocationContext";

export default function TimeDate() {
  const { data, loading, error } = useTimeLocation();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data available</div>;
  const dateTime = new Date(data.datetime);
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes().toString().padStart(2, "0");
  const abbreviation = data.abbreviation;
  const city = data.timezone.split("/").pop().toUpperCase();
  const country = data.timezone.split("/").shift().toUpperCase();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-4 items-baseline">
        <p className="text-8xl font-semibold md:text-[12.5rem] ">
          {hours}:{minutes}
        </p>
        <p className="text-xl md:text-4xl ">{abbreviation}</p>
      </div>
      <p className="font-bold text-sm md:text-2xl">
        {" "}
        IN {city}, {country}
      </p>
    </div>
  );
}
