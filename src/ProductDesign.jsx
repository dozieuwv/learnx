import { Link, useLocation } from "react-router-dom";
import "./App.css";
import pdimg from "./assets/pd-img.png"
import Goback from "./components/Goback";

const ProductDesign = () => {
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
        <Goback/>
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
            <strong>Product Design (PD)</strong> is the process of creating and
            developing a physical or digital product from concept to completion
            ensuring they meet the users goals and business goals. This track
            encompasses a wide range of skills, including user research, user
            interface (UI) design, interaction design, prototyping, and
            usability testing
          </p>
        </div>
        <div className="course-program">
          <p>
            <strong>Product Design curriculum</strong>
          </p>
          <p>
            This program is designed to provide you with in-depth knowledge on
            these
          </p>
          <div className="course-lineup">
            <div className="first-course">
              <ul>
                <li>Principles of Design and Introduction to Figma</li>
                <li>User Data, User Research and Personas</li>
                <li>Ideation</li>
                <li>Usability Testing and Evaluation</li>
                <li>UI Design Elements and Components</li>
              </ul>
            </div>
            <div className="second-course">
              <ul>
                <li>UI Design Patterns</li>
                <li>Branding and UI</li>
                <li>Design Systems</li>
                <li>Blockchain/Web3</li>
                <li>Multi Device Design and Responsive Design</li>
              </ul>
            </div>

            <div className="side-img">
              <img src={pdimg} className="pd-img"/>
            </div>
          </div>
        </div>

        <div className="tuition">
          <p><strong>Tuition</strong></p>
          <p>Program Duration : <strong>6 Months Internship Program</strong></p>
          <p>Tuition Fee <strong>450,000 Naira only</strong></p>
        </div>
      </div>
    </div>
  );
};

export default ProductDesign;
