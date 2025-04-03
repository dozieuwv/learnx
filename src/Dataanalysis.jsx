import { Link, useLocation } from "react-router-dom";
import daimg from "./assets/da-img.png";

import "./App.css";
import Goback from "./components/Goback";

const DataAnalysis = () => {
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
            <strong>Data Analysis (DA)</strong> involves examining, cleaning, transforming, and
            modeling data to discover useful information, draw conclusions, and
            support decision-making. This field focuses on applying statistical
            and computational techniques to large datasets to identify patterns,
            trends, and relationships.
          </p>
        </div>
        <div className="course-program">
          <p>
            <strong>Data Analysis Curriculum</strong>
          </p>
          <p>
            This program is designed to provide you with in-depth knowledge on
            these
          </p>
          <div className="course-lineup">
            <div className="first-course">
              <ul>
                <li>Introduction to Data Analysis</li>
                <li>Gathering Data</li>
                <li>Introduction to Spreadsheets</li>
                <li>Intermediate Excel: Formulas, Functions</li>
               
              </ul>
            </div>
            <div className="second-course">
              <ul>
                <li>Advanced Excel: Conditional Formatting.</li>
                <li>Introduction to SQL; MSSQL</li>
                <li>Business Intelligence Tools; Power BI and Tableau</li>
                <li>Data Analysis with R programming</li>
             
              </ul>
            </div>

            <div className="side-img">
              <img src={daimg} className="pd-img" />
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

export default DataAnalysis;
