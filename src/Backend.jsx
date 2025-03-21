import { Link } from "react-router-dom";
import "./App.css";

const Backend = () => {
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
         <strong> Backend Development (BE)</strong> in software engineering is the art of building and maintaining
         <br />
          the server-side of applications. It involves mastering programming languages like Python
          <br />
           or Node.js and database management with SQL or NoSQL databases.
          </p>
          <div>
            <h4 className="text-lg font-semibold">Backend Development Curriculum</h4>
            <p>This program is designed to provide you with in-depth knowledge on these:</p>
            <ul className="course-list">
              {[
                "Introduction to Programming",
                "Git & Version Control",
                "JavaScript Fundamentals",
                "Object Oriented JavaScript",
                "Regular Expressions",
                "JavaScript Design Patterns",
                "Developing APIs with Node",
              ].map((item) => (
                <li key={item} className="course-item">
                  {item}
                </li>
              ))}
            </ul>

            <img 
              src="src/assets/(Purple) - Software development app development app coding 1.png"
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

export default Backend;