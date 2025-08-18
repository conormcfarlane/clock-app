import React from "react";
import { useTimeLocation } from "../context/timeLocationContext";

export default function MoreContent() {
  const { data } = useTimeLocation();
  const moreStats = [
    { title: "CURRENT TIMEZONE", content: data?.timezone },
    { title: "DAY OF THE YEAR", content: data?.day_of_year },
    { title: "DAY OF THE WEEK", content: data?.day_of_week },
    { title: "WEEK NUMBER", content: data?.week_number },
  ];

  return (
    <section className="py-12 flex flex-col gap-4 bg-gray-400 px-4">
      {moreStats.map((content, index) => (
        <div key={index} className="flex justify-between">
          <p>{content.title}</p>
          <p className="font-semibold">{content.content}</p>
        </div>
      ))}
    </section>
  );
}
