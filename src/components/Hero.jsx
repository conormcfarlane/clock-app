import React from "react";
import Greeting from "./Greeting";
import TimeDate from "./TimeDate";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="flex flex-col gap-10 lg:relative">
      <Greeting />
      <TimeDate />
      <div className="lg:absolute lg:right-0 lg:bottom-0">
        <Button />
      </div>
    </section>
  );
}
