import { Link, useLocation } from "react-router-dom";
import aiimg from "./assets/ai-img.png";

import "./App.css";
import Goback from "./components/Goback";

const AIMachineLearning = () => {
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
            <strong>Ai/ Machine (ML)</strong> involves focusing on the field of artificial
            intelligence and enabling computer systems to learn from data
            without being explicitly programmed, improving their performance
            over time through experience.
          </p>
        </div>
        <div className="course-program">
          <p>
            <strong>Ai/Machine learning  Curriculum</strong>
          </p>
          <p>
            This program is designed to provide you with in-depth knowledge on
            these
          </p>
          <div className="course-lineup">
            <div className="first-course">
              <ul>
                <li>Linear Algebra</li>
                <li>Calculus</li>
                <li>Probability and Statistics</li>
                <li>Python</li>
                <li>Data structure and Algorithms</li>
              </ul>
            </div>
            <div className="second-course">
              <ul>
                <li>Data Visualization</li>
                <li>Linear Regression</li>
                <li>Dimensionality Reduction</li>
                <li>Machine learning Framework</li>
                <li>Version Control</li>
              </ul>
            </div>

            <div className="side-img">
              <img src={aiimg} className="pd-img" />
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

export default AIMachineLearning;
