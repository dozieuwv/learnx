import { Link, useLocation } from "react-router-dom";
import beimg from "./assets/be-img.png";

import "./App.css";
import Goback from "./components/Goback";

const Backend = () => {
  const location = useLocation();
  
  const courses = [
    { name: "Product Design", path: "/product-design" },
    { name: "Backend", path: "/backend" },
    { name: "Frontend", path: "/frontend" },
    { name: "Data Analysis", path: "/data-analysis" },
    { name: "AI/Machine Learning", path: "/ai-machine-learning" },
  ];
  return (
    <div className="course-containers">
      {/* Top Navigation Arrow */}
      <div className="">
        <Goback />
      </div>

      {/* Course Category Links */}
      <div className="course-links-container">
      <ul className="course-links">
        {courses.map((course) => (
          <li key={course.name}>
            <Link 
              to={course.path} 
              className={location.pathname === course.path ? "active" : ""}
            >
              {course.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>

      {/* Course Description */}
      <div className="course-desc">
        <div className="courser">
          <p>
            <strong>Backend Development (BE)</strong> in software engineering is the art of
            building and maintaining the server-side of applications. It
            involves mastering programming languages like Python or Node.js and
            database management with SQL or NoSQL databases.
          </p>
        </div>
        <div className="course-program">
          <p>
            <strong>Backend Development curriculum</strong>
          </p>
          <p>
            This program is designed to provide you with in-depth knowledge on
            these
          </p>
          <div className="course-lineup">
            <div className="first-course">
              <ul>
                <li>Introduction to Programming</li>
                <li>Git & Version Control</li>
                <li>JavaScript Fundamentals</li>
                <li>Object Oriented JavaScript</li>
          
              </ul>
            </div>
            <div className="second-course">
              <ul>
                <li>Regular Expressions</li>
                <li>JavaScript Design Patterns</li>
                <li>Developing APIs with Node</li>
              </ul>
            </div>

            <div className="side-img">
              <img src={beimg} className="pd-img" />
            </div>
          </div>
        </div>

        <div className="tuition">
          <p>
            <strong>Tuition</strong>
          </p>
          <p>
            Program Duration : <strong>6 Months Internship Program</strong>
          </p>
          <p>
            Tuition Fee <strong>450,000 Naira only</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Backend;
