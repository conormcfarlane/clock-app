import React, { useState } from "react";
import Quote from "./Quote";
import Hero from "../components/Hero";
import { MenuProvider } from "../context/MenuContext";
import { TimeLocationProvider } from "../context/timeLocationContext";

export default function Layout() {
  return (
    <div className="px-4 py-8">
      <TimeLocationProvider>
        <MenuProvider>
          <Quote />
          <Hero />
        </MenuProvider>
      </TimeLocationProvider>
    </div>
  );
}
