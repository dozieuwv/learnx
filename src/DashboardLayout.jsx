import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Learnx from "./assets/Learnx.png";
import profile from "./assets/profile.png";
import { MdSpaceDashboard } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { LuPhoneCall } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import "./Dashlayout.css";
import { IoIosNotifications, IoMdClose } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./redux/slice/authSlice";
import { useState } from "react";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    navigate("/signin");
  }

  const handleLogout = () => {
    dispatch(logout());
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="dashlayout_container">
      <aside className={`Sidebar1 ${isSidebarOpen ? "open" : "closed"}`}>
        {/* <aside className="Sidebar1"> */}
        
        <div className="TOP1">
          <div className="Top1a">
            <img src={Learnx} alt="" className="topimg" />
            <button onClick={toggleSidebar} >
              <IoMdClose size={25} />
            </button>
          </div>
          <div className="Top1b">
            <img src={profile} alt="" className="imgtopb" />
            <div className="Top1b__text">
              <h4> {user?.firstname}  {user?.lastname}</h4>
              <p>{user?.email}</p>
            </div>
          </div>
          {/* <div className="Top1c">
            <input type="text" placeholder="search" />
            <CiSearch className="searchimg" />
          </div> */}
        </div>
        <div className="Middle1">
          <ul>
            <li>
              <Link
                to={"/dashboard"}
                className={`linkTag ${
                  location.pathname === "/dashboard" ? "selected" : ""
                }`}
              >
                <MdSpaceDashboard /> Dashboard
              </Link>
            </li>
            <li>
              <Link
                to={"/courses"}
                className={`linkTag ${
                  location.pathname === "/courses" ? "selected" : ""
                }`}
              >
                <IoBookSharp /> My Courses
              </Link>
            </li>
            <li>
              <Link
                to={"/mentors"}
                className={`linkTag ${
                  location.pathname === "/mentors" ? "selected" : ""
                }`}
              >
                <IoPersonAddSharp /> Mentors
              </Link>
            </li>
            <li>
              <Link
                to={"/paymentModal"}
                className={`linkTag ${
                  location.pathname === "/paymentModal" ? "selected" : ""
                }`}
              >
                <MdOutlinePayment /> Payments
              </Link>
            </li>
            <li>
              <Link
                to={"/certificate"}
                className={`linkTag ${
                  location.pathname === "/certificate" ? "selected" : ""
                }`}
              >
                <PiCertificateFill /> Certification
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className={`linkTag ${
                  location.pathname === "/" ? "selected" : ""
                }`}
              >
                <LuPhoneCall />
                Supports
              </Link>
            </li>
          </ul>
        </div>
        <div className="Bottom1">
          <ul>
            <li onClick={handleLogout}>
              <TbLogout2 />
              logout
            </li>
          </ul>
        </div>
      </aside>
      <div className="maindash">

        <header className="headerdash">
          <nav className="navinputdash">
          {!isSidebarOpen && (
      <button className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </button>
    )}
            <div className="searchdash1">
              {/* <input type="text" placeholder="search" />
              <CiSearch className="searchicon" /> */}
            </div>

            <div className="notificationdash">
              <IoIosNotifications size={25}/>
              <IoMdPerson size={25}/>
              <p>{user?.firstname}</p>
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
