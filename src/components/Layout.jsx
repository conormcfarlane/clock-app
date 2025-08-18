import React, { useState } from "react";
import Quote from "./Quote";
import Hero from "../components/Hero";

import { useMenu } from "../context/MenuContext";
import MoreContent from "./MoreContent";
import { isDaytime } from "../utils/timeHelper";

export default function Layout() {
  const { isMenuOpen } = useMenu();
  return (
    <div
      className={`flex flex-col justify-between relative z-10 min-h-screen bg-cover bg-no-repeat ${
        isDaytime ? "bg-day" : "bg-night"
      } text-white ${isMenuOpen ? "" : ""}`}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="px-4 py-8 relative z-10 flex flex-col justify-between h-screen">
        <Quote />
        <Hero />
      </div>
      <div className="relative z-10">{isMenuOpen && <MoreContent />}</div>
    </div>
  );
}
