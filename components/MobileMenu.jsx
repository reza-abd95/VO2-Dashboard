import React from "react";
import Menu from "./Menu";

function MobileMenu({ closeMenu }) {
  return (
    <div>
      <div
        onClick={closeMenu}
        className="fixed min-h-full w-full bg-gray-500/50 z-10 lg:hidden right-0 bottom-0"
      ></div>
      <div className="absolute right-0 min-h-full rounded-l-lg min-w-[55%] md:min-w-[45%] bg-white lg:hidden z-20  flex flex-col items-center">
        <Menu />
      </div>
    </div>
  );
}

export default MobileMenu;
