import { Link } from "react-router-dom";
import "./App.css";

const  DataAnalysis = () => {
  return (
    <div className="course-containers">
      {/* Top Navigation Arrow */}
      <div className="border w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
        ←
      </div>

      {/* Course Category Links */}
      <div className="course-links-container">
        <ul className="course-links">
          {[
            { name: "Product Design", path: "/product-design" },
            { name: "Backend", path: "/backend" },
            { name: "Frontend", path: "/frontend" },
            { name: "Data Analysis", path: "/data-analysis" },
            { name: "AI/Machine Learning", path: "/ai-machine-learning" },
          ].map((course) => (
            <li key={course.name}>
              <Link to={course.path} className="text-blue-500 hover:underline">
                {course.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Course Description */}
      <div className="flex space-x-6">
        {/* Text Section */}
        <div className="flex-1 space-y-4">
          <p className="text">
            <strong> Data Analysis (DA)</strong> involves examining, cleaning, transforming, and modeling data to 
            <br /> 
            discover useful information, draw conclusions, and support decision-making. This field 
            <br />
            focuses on applying statistical and computational techniques to large datasets to identify 
            <br />
            patterns, trends, and relationships.        
          </p>
          <div>
            <h4 className="text-lg font-semibold">Data Analysis Curriculum</h4>
            <p>This program is designed to provide you with in-depth knowledge on these:</p>
            <ul className="course-list">
              {[
                "Introduction to Programming",
                "Git & Version Control",
                "JavaScript Fundamentals",
                "Data structures - Arrays and Objects",
                "HTML & CSS Fundamentals",
                "Advanced HTML & CSS",
                "JavaScript Design Patterns",
                "Developing Web Apps with React",
              ].map((item) => (
                <li key={item} className="course-item">
                  {item}
                </li>
              ))}
            </ul>

            <img 
              src="src/assets/(Purple) - Budget report accounts report accounting consultant 1 (1).png" 
              alt="Course Visual" 
              className="course-image"
            />
          </div>

          {/* Tuition Information */}
          <div>
            <h3 className="text-lg font-bold">Tuition</h3>
            <p>
              Program Duration: <strong>6 Month Internship Program</strong>
            </p>
            <p>
              Tuition Fee: <strong>450,000 Naira Only</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalysis;