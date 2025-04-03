import { Link, useLocation } from "react-router-dom";
import feimg from "./assets/fe-img.png";

import "./App.css";
import Goback from "./components/Goback";

const Frontend = () => {

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
            <strong>Frontend Development (FE)</strong> involves the process of creating and
            implementing the User Interface (UI) and User Experience (UX) for
            online and mobile apps is referred to as Frontend Development. This
            area of development is concerned with producing aesthetically
            beautiful, engaging, and user-friendly designs that meet end-user
            requirements.
          </p>
        </div>
        <div className="course-program">
          <p>
            <strong>Frontend Development Curriculum</strong>
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
                <li>Data structures - Arrays and Objects</li>
             
              </ul>
            </div>
            <div className="second-course">
              <ul>
                <li>HTML & CSS Fundamentals</li>
                <li>Advanced HTML & CSS</li>
                <li>JavaScript Design Patterns</li>
                <li>Developing Web Apps with React</li>
               
              </ul>
            </div>

            <div className="side-img">
              <img src={feimg} className="pd-img" />
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

export default Frontend;
