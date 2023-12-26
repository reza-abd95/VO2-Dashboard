import React, { useState } from "react";
import { Icon } from "@iconify/react";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isOnMenu, setIsOnMenu] = useState(false);

  const openMenu = () => {
    setIsOnMenu(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setIsOnMenu(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {isOnMenu && <MobileMenu closeMenu={closeMenu} />}
      <div className="w-full h-14  border-b-2 border-b-gray-100 lg:border-0 flex items-center justify-between lg:justify-end">
        <div onClick={openMenu} className="lg:hidden cursor-pointer">
          <Icon icon="ci:hamburger-md" className="text-[#878787] text-3xl" />
        </div>
        <div>ورزشکاران من</div>
      </div>
    </>
  );
}

export default Navbar;
