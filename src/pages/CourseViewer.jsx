import { useEffect, useState } from "react";
import "../styles/CourseViewer.css"; // Import CSS file
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse } from "../redux/slice/getCourseSlice";

const CourseViewer = () => {
    const { data } = useSelector((state) => state.getCourse);

    const { isAuthenticated } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  if(!isAuthenticated) {
    navigate("/signin");
  }

    useEffect(() => {
        dispatch(fetchCourse()); // Fetching some API endpoint    
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
    
  const [selectedWeek, setSelectedWeek] = useState(data?.currentWeekVideos[0]?.week || 1);

  // Filter courses based on selected week
  const filteredCourses = data?.allCourses.filter(course => course.week === selectedWeek);

  return (
    <div className="course-container">
      {/* Week Navigation */}
      <div className="week-navigation">
        {Array.from(new Set(data?.allCourses.map(course => course.week))).map(week => (
          <button
            key={week}
            onClick={() => setSelectedWeek(week)}
            className={`week-button ${selectedWeek === week ? 'active' : ''}`}
          >
            Week {week}
          </button>
        ))}
      </div>
      
      {/* Course Content */}
      <div className="course-content">
        {filteredCourses.map(course => (
          <div key={course._id} className="course-card">
            <h2 className="course-title">{course.title}</h2>
            {/* <img src={course.image} alt={course.title} className="course-image" /> */}
            <p className="course-task">{course.weeklyTask}</p>
            <video controls className="course-video">
              <source src={course.Link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseViewer;
