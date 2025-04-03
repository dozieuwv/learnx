import courseimg from "../assets/courseimg.png";
import Group130 from "../assets/Group130.png";
// import Coursesdash from "../styles/Coursesdash.css";
import "../styles/Newcourse.css";

const Courses = () => {
  return (
    <>
      <div className="coursecontainer">
        <div className="weekbutdiv">
          <button className="weekbut">Week 3</button>
        </div>
        <div className="pagination">
          <button className="nav-btn">{"<"}</button>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((num) => (
            <button
              key={num}
              className={`page-btn ${num === 3 ? "active" : ""}`}
            >
              {num}
            </button>
          ))}
          <button className="nav-btn">{">"}</button>
        </div>
        <div className="coursescontent">
          <div className="learsoncard">
            <p className="lesson-info">Lesson: 3 from 14</p>
            <h3 className="lesson-title">Product Design</h3>
            <p className="facilitator">
              {" "}
              <strong>Facilitator: Albert Paul</strong>
            </p>
            <div className="courseimgcontainer">
              <img src={courseimg} alt="" className="courseimgvid" />
              <div className="playbutdiv">
                <button className="play-btn1">|▶</button>
                <button className="play-btn">▶</button>
                <button className="play-btn2">▶|</button>
              </div>
            </div>
            <div className="supplementary">
              <p>Supplementary Lesson Material</p>
              <div className="file-container">
                <img src={Group130} alt=""  className="pdf-icon"/>
                <span className="file-name">Product_Design_Ideation_Supplementary_Material</span>
                <button className="download-btn">Download</button>
              </div>
            </div>
            <div className="about-topic">
              <h3>About Topic</h3>
              <p>
                Ideation is the process of forming ideas from conception to
                implementation, most often in a business setting. Ideation is
                expressed via graphical, written, or verbal methods, and arises
                from past or present knowledge, influences, opinions,
                experiences, and personal convictions.
              </p>
            </div>
          </div>

          <div className="task-card">
            <div>
              <h3>Task</h3>
              <p>
                Ideate on a product you wish to market and come up with a
                possible solution that will bring value to your target audience
                and profit to you.
              </p>
            </div>

            <div>
              <h3>Submission</h3>
              <p>Date:</p>
              <p>Time:</p> 
              
            </div>

            <div>
            <label>Task Link</label>
                <input type="text" placeholder="Input web link" />
              

              
                <label>Host link</label>
                <input type="text" placeholder="Input git link" />
            </div>

            <div>
            <button className="tasksubbut">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
