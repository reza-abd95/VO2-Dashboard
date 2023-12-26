import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

function MenuItem({ icon, title, link }) {
  return (
    <NavLink
      to={link}
      className="transition duration-200 ease-out w-full rounded-xl px-6 py-3 my-[2px] flex items-center justify-end cursor-pointer hover:bg-[#fff0f7] aria-[current=page]:bg-[#ffe5f2] text-[#878787] aria-[current=page]:text-[#ff0272]"
    >
      <p className=" text-base mx-5 font-medium">{title}</p>
      <Icon icon={icon} className=" text-2xl" />
    </NavLink>
  );
}

export default MenuItem;
