import React from "react";
import MobileBgImageDaytime from "../assets/images/mobile/bg-image-daytime.jpg";

export default function Layout({ children }) {
  return (
    <div
      className="bg-cover bg-no-repeat text-white "
      style={{ backgroundImage: `url(${MobileBgImageDaytime})` }}
    >
      <div className="flex flex-col justify-between min-h-screen px-4 pt-8  backdrop-brightness-60 md:px-15">
        {children}
      </div>
    </div>
  );
}
