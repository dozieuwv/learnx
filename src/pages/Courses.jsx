import { useDispatch, useSelector } from "react-redux";
import Group130 from "../assets/Group130.png";
// import Coursesdash from "../styles/Coursesdash.css";
import "../styles/Newcourse.css";
import "../styles/CourseViewer.css";
import { useNavigate } from "react-router-dom";
import { fetchCourse } from "../redux/slice/getCourseSlice";
import { useEffect, useState } from "react";
import store from "../redux/store";
import axios from "axios";
import toast from "react-hot-toast";

const Courses = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [loadingTaskSubmit, setLoadingTaskSubmit] = useState(false);
  // const [errorTaskSubmit, setErrorTaskSubmit] = useState(null);
  // const [success, setSuccess] = useState(false);
  const [linUrl, setLinkUrl] = useState("")

  const state = store.getState()
    const token = state.auth.token

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    navigate("/signin");
  }

  useEffect(() => {
    dispatch(fetchCourse()); // Fetching some API endpoint
  }, []);

  const { data, loading, error } = useSelector((state) => state.getCourse);

  // eslint-disable-next-line no-unused-vars
  const [selectedWeek, setSelectedWeek] = useState(
    data?.currentWeekVideos[0]?.week || 1
  );
  const inputs = {
    email:  user?.email,
    taskWeek: 1,
    taskURL: linUrl
  };

  // Filter courses based on selected week
  const filteredCourses = data?.allCourses.filter(
    (course) => course.week === selectedWeek
  );

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error loding courses data.</div>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    setLoadingTaskSubmit(true);
    // setErrorTaskSubmit(null);
    // setSuccess(false);


    try {
      const response = await axios.post(
        "https://learnx-official-api.onrender.com/api/v1/Asessments/SubmitTask",
        inputs,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include Bearer token
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success('Successfully submitted task')
        // setSuccess(true);
      }
    } catch (err) {
      console.log(err);
      toast.error('Failed to submitted task')
      // setErrorTaskSubmit("An error occurred. Please try again.");
    } finally {
      setLoadingTaskSubmit(false);
    }
   
    
   
  }

  return (
    <>
      <div className="coursecontainer">
        <div className="weekbutdiv">
          <button className="weekbut">Week 1</button>
        </div>
        <div className="pagination">
          <button className="nav-btn">{"<"}</button>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
            <button
              key={num}
              className={`page-btn ${num === 1 ? "active" : ""}`}
            >
              {num}
            </button>
          ))}
          <button className="nav-btn">{">"}</button>
        </div>
        {filteredCourses?.map((course) => (
          <div key={course._id} className="coursescontent">
            <div className="learsoncard">
              {/* <h3 className="lesson-title">Product Design</h3> */}
              <div className="courseimgcontainer">
                <div className="">
                  <p className="lesson-info">Lesson: 1 from 11</p>
                  <h2 className="course-title">{course.title}</h2>
                  <p className="facilitator">
                    <strong>Facilitator: Albert Paul</strong>
                  </p>
                  {/* <img src={course.image} alt={course.title} className="course-image" /> */}
                  {/* <p className="course-task">{course.weeklyTask}</p> */}
                  <video controls className="course-video">
                    <source src={course.Link} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="supplementary">
                <p>Supplementary Lesson Material</p>
                <div className="file-container">
                  <img src={Group130} alt="" className="pdf-icon" />
                  <span className="file-name">{course.title}</span>
                  <button disabled className="download-btn">Download</button>
                </div>
              </div>
              <div className="about-topic">
                <h3>About Topic</h3>
                <p>
                  Ideation is the process of forming ideas from conception to
                  implementation, most often in a business setting. Ideation is
                  expressed via graphical, written, or verbal methods, and
                  arises from past or present knowledge, influences, opinions,
                  experiences, and personal convictions.
                </p>
              </div>
            </div>

            <div className="task-card">
              <div>
                <h3>Task</h3>
                <p>{course.weeklyTask}</p>
              </div>

              <div>
                <h3>Submission</h3>
                <p>Date:</p>
                <p>Time:</p>
              </div>

              <form onSubmit={handleSubmit} className="task_form">
                <label>Task Link</label>
                <input type="text" name="taskURL" required value={linUrl || ""}   placeholder="Enter task link" onChange={(e) =>setLinkUrl(e.target.value) } />

                {/* <label>Host link</label>
                <input type="text" placeholder="Input git link" /> */}
                <div className="butn_container">
                  <button type="submit" className="tasksubbut">{loadingTaskSubmit ? "Submitting...": "Submit"}</button>
                </div>
              </form>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
