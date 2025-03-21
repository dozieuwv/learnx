import { Outlet } from "react-router-dom";
import Learnx from "./assets/Learnx.png";
import Userx from "./assets/Userx.png";
import profile from "./assets/profile.png";
import { CiSearch } from "react-icons/ci";
import { MdSpaceDashboard } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { LuPhoneCall } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import "./DashLayout.css";
import { IoIosNotifications } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const DashboardLayout = () => {
  return (
    <div className="dashlayout_container">
      <aside className="Sidebar1">
        <div className="TOP1">
          <div className="Top1a">
            <img src={Learnx} alt="" className="topimg" />
            <img src={Userx} alt="" className="topimg" />
          </div>
          <div className="Top1b">
            <img src={profile} alt="" className="imgtopb" />
            <div className="Top1b__text">
              <h4> Precious phd</h4>
              <p>preciousking1@gmail.com</p>
            </div>
          </div>
          <div className="Top1c">
            <input type="text" placeholder="search" />
            <CiSearch className="searchimg" />
          </div>
        </div>
        <div className="Middle1">
          <ul>
            <li>
              <MdSpaceDashboard /> Dashboard
            </li>
            <li>
              <IoBookSharp /> My Courses
            </li>
            <li>
              <IoPersonAddSharp /> Mentos
            </li>
            <li>
              <MdOutlinePayment /> Payments
            </li>
            <li>
              <PiCertificateFill /> Certification
            </li>
            <li>
              <LuPhoneCall />
              Supports
            </li>
          </ul>
        </div>
        <div className="Bottom1">
          <ul>
            <li>
              <TbLogout2 />
              logout
            </li>
          </ul>
        </div>
      </aside>
      <div className="maindash">
        <header className="headerdash">
          <nav className="navinputdash">
            <div className="searchdash1">
              <input type="text" placeholder="search" />
              <CiSearch className="searchicon"/>
            </div>

            <div className="notificationdash">
              <IoIosNotifications />
              <IoMdPerson />
              <p>precious</p>
              <IoMdArrowDropdown />
            </div>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
