import { Route, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import "./index.css";
import Home from "../components/Home";
import Calender from "../components/Calender";
import Analyze from "../components/Analyze";
import Atp from "../components/Atp";
import Practice from "../components/Practice";
import Managing from "../components/Managing";
import Strategy from "../components/Strategy";
import Setting from "../components/Setting";
import Activity from "../components/Activity";

function App() {
  return (
    <div className="flex">
      <div className="lg:w-4/5 w-full bg-[#fcfcfc] px-7 ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/atp" element={<Atp />} />
          <Route path="/managing" element={<Managing />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </div>
      <div className="hidden lg:block w-1/5 min-h-screen bg-white shadow-[-5px_0px_20px_0px_#00000024]">
        <Menu />
      </div>
    </div>
  );
}

export default App;
