import React from "react";
import { useMenu } from "../context/MenuContext";
import iconArrowUp from "../assets/images/desktop/icon-arrow-up.svg";
export default function Button() {
  const { isMenuOpen, MenuToggle } = useMenu();
  console.log(isMenuOpen);
  return (
    <div className="bg-white rounded-full px-3 py-2 flex gap-4 items-center justify-between max-w-[145px]">
      <p>{isMenuOpen ? "L E S S" : "M O R E"}</p>
      <button onClick={MenuToggle}>
        <img
          src={iconArrowUp}
          alt=""
          className={`${!isMenuOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>
    </div>
  );
}
