import { Link } from "react-router-dom";
import "./App.css";

const ProductDesign = () => {
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
          <strong>Product Design (PD)</strong> is the process of creating and developing a physical or digital product
          <br /> 
          from concept to completion, ensuring they meet the users goals and business goals. This 
          <br />
          track encompasses a wide range of skills, including user research, user interface (UI) 
          <br />
          design, interaction design, prototyping, and usability testing.
          </p>
          <div>
            <h4 className="text-lg font-semibold">Product Design Curriculum</h4>
            <p>This program is designed to provide you with in-depth knowledge on these:</p>
            <ul className="course-list">
              {[
                "Principles of Design and Introduction to Figma",
                "UI Design Patterns",
                "User Data, User Research and Personas",
                "Branding and UI",
                "Ideation",
                "Design Systems",
                "Usability Testing and Evaluation",
                "Blockchain/Web3",
                "UI Design Elements and Components",
                "Multi Device Design and Responsive Design",
              ].map((item) => (
                <li key={item} className="course-item">
                  {item}
                </li>
              ))}
            </ul>

            <img 
              src="src/assets/gradient-colored-ui-kit-collection_23-2149192853 (1).png" 
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
              Tuition Fee: <strong>450,000 Naira</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDesign;