import React from "react";
import { useTimeLocation } from "../context/timeLocationContext";

export default function TimeDate() {
  const { data, loading, error } = useTimeLocation();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data available</div>;
  const dateTime = new Date(data.datetime);
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const abbreviation = data.abbreviation;
  const city = data.timezone.split("/").pop().toUpperCase();
  const country = data.timezone.split("/").shift().toUpperCase();

  return (
    <div>
      <div className="flex gap-4">
        <p className="text-8xl font-semibold">
          {hours}:{minutes}
        </p>
        <span className="text-xl self-end">{abbreviation}</span>
      </div>
      <p className="font-semibold text-sm">
        {" "}
        IN {city}, {country}
      </p>
    </div>
  );
}
