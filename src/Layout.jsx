import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaEnvelope, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaPhone } from "react-icons/fa6";
import "./App.css";
import Learnx from "./assets/Learnx.png";
import logo from "./assets/logo.png";
import LearnXF from "./assets/LearnXF.png";

function Layout() {
  const navigate = useNavigate();
  return (
    <div className="Navcon">
      <nav className="Header">
        <img src={Learnx} alt="" className="Img1" />

        <ul>
          <li>
            <Link to="/about" className="nav_link_top">About Us</Link>
          </li>
          <li>
            <Link to="#" className="nav_link_top">Category</Link>
          </li>
          <li>
            <Link to="#" className="nav_link_top">Testimonial</Link>
          </li>
          <li>
            <Link to="/" className="nav_link_top">FAQs</Link>
          </li>
        </ul>

        <div className="butdiv1">
          <button className="But1" onClick={() => navigate("/signin")}>Login</button>
          <button className="But2" onClick={() => navigate("/signup")}>Register</button>
        </div>
      </nav>

      <Outlet />

      <footer className="footer">
        {/* Logo and Contact Section */}
        <div
          className="footer-section logo-section"
          id="footer-sectionlogo-section"
        >
          <div className="footerp">
            <img src={logo} alt="LearnX Logo" className="footer-logo" />
            <img src={LearnXF} alt="" />
          </div>
          <p className="footer-text">
            At LearnX, we are committed to success in everything we <br /> do.
            Therefore, the success of our interns is paramount as <br /> it is
            also how we are perceived.
          </p>
          <div className="footer-icons">
            <div className="footer-contact">
              <FaPhone className="icon" />
              <span>+234 814 012 0539</span>
            </div>
            <div className="footer-contact">
              <FaEnvelope className="icon" />
              <span>LearnX@LearnX.NG</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">About us</Link>
            </li>
            <li>
              <Link to="#">Courses</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="#">Career</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>
              <Link to="#">FAQs</Link>
            </li>
            <li>
              <Link to="#">Help Centre</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-section">
          <h3>Socials</h3>
          <div className="social-icons">
            <Link to="#">
              <FaFacebook />
            </Link>
            <Link to="#">
              <FaInstagram />
            </Link>
            <Link to="#">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </footer>

      {/* <footer>
                <nav>
                    <div>
                        <h4>LearnX</h4>
                        <p>At learnX we are committed to success in everything we</p>
                        <p>do. Therefore the success of our interns is paramount as</p>
                        <p>it is also how we are percieved.</p>
                        <div>
                        <FaFacebookF />
                        <FaInstagram />
                        <BsTwitter />
                        <SlSocialLinkedin />

                        </div>
                        <p><FaPhone />+234 814 012 0539</p>
                        <p><BiSolidMessageAltDetail />LearnX@LearnX.NG</p>
                    </div>

                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>

                            <li>
                            <Link to="#">About Us</Link>
                            </li>
                            <li>
                            <Link to="#">About Us</Link>
                            </li>
                            <li>
                            <Link to="#">Courses</Link>
                            </li>

                            <li>
                            <Link to="#">Contact Us</Link>
                            </li>

                            <li>
                            <Link to="#">career</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4>support</h4>
                        <ul>
                            <li><Link to="#">FAQs</Link></li>
                            <li>
                            <Link to="#">Help caenter</Link>
                            </li>

                            <li>
                            <Link to="#">Privacy policy</Link>
                            </li>

                            <li>
                            <Link to="#">Terms and Conditions</Link>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </footer> */}
    </div>
  );
}
export default Layout;
