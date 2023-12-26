import React from "react";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className=" flex flex-col items-center px-3 w-full">
      <img src="../src/images/logo.png" className=" py-5 w-14 " alt="" />
      <MenuItem icon="teenyicons:home-solid" title="خانه" link="/" />
      <MenuItem
        icon="simple-line-icons:calender"
        title="تقویم"
        link="/calender"
      />
      <MenuItem icon="lets-icons:chart" title="آنالیز" link="/analyze" />
      <MenuItem icon="gravity-ui:sliders-vertical" title="ATP" link="/atp" />
      <MenuItem
        icon="fluent:people-team-28-filled"
        title="مدیریت ورزشکاران"
        link="/managing"
      />
      <hr className=" w-full h-1 my-4 text-gray-950" />

      <MenuItem icon="gg:gym" title="مخزن تمرین ها" link="/practice" />
      <MenuItem
        icon="fluent:flow-32-regular"
        title="استراتژی"
        link="/strategy"
      />
      <MenuItem icon="uil:setting" title="تنظیمات" link="/setting" />
      <MenuItem icon="ph:bell" title="آخرین فعالیت ها" link="/activity" />
    </div>
  );
}

export default Menu;
