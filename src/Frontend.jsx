import { Link } from "react-router-dom";
import "./App.css";

const Frontend = () => {
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
            <strong>Frontend Development (FE)</strong> involves the process of
            creating and implementing the User
            <br />
            Interface (UI) and User Experience (UX) for online and mobile apps
            is referred to as
            <br />
            Frontend Development. This area of development is concerned with
            producing
            <br />
            aesthetically beautiful, engaging, and user-friendly designs that
            meet end-user <br /> requirements.
          </p>
          <div>
            <h4 className="text-lg font-semibold">
              Frontend Development Curriculum
            </h4>
            <p>
              This program is designed to provide you with in-depth knowledge on
              these:
            </p>
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
              src="src/assets/(Purple) - Budget report accounts report accounting consultant 1.png"
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

export default Frontend;
