import { Link } from "react-router-dom";
import "./App.css";

const AIMachineLearning = () => {
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
          <strong>Ai/ Machine (ML) </strong> involves focusing on the field of artificial intelligence and enabling 
          <br />
          computer systems to learn from data without being explicitly programmed, improving their
          <br />
           performance over time through experience.
          </p>
          <div>
            <h4 className="text-lg font-semibold">Ai/Machine Learning Curriculum</h4>
            <p>This program is designed to provide you with in-depth knowledge on these:</p>
            <ul className="course-list">
              {[
                "Linear Algebra",
                "Calculus",
                "Probability and Statistics",
                "Python",
                "Data structure and Algorithms",
                "Data Visualization",
                "Linear Regression",
                "Dimensionality Reduction",
                "Machine learning Framework",
                "Version Control",
              ].map((item) => (
                <li key={item} className="course-item">
                  {item}
                </li>
              ))}
            </ul>

            <img 
              src="src/assets/person-working-html-computer.png" 
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

export default AIMachineLearning;