import React from "react";
import Greeting from "./Greeting";
import TimeDate from "./TimeDate";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="bg-green-900">
      <Greeting />
      <TimeDate />
      <Button />
    </section>
  );
}
